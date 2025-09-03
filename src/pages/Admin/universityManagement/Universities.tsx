import {
  Button,
  Pagination,
  Space,
  Table,
  type TableColumnsType,
  type TableProps,
} from "antd";
import { useMemo, useState } from "react";

import type { TQueryParam, TUniversity } from "../../../types";
import { useGetAllCountriesQuery } from "../../../redux/features/admin/CountryManagement.api";
import {
  useDeleteSingleUniversityMutation,
  useGetAllUniversitiesQuery,
} from "../../../redux/features/admin/universityManagement.api";
import { toast } from "sonner";

export type TTableData = Pick<TUniversity, "name">;

const UniversityData = () => {
  const [params, setParams] = useState<TQueryParam[]>([]);
  const [page, setPage] = useState(1);
  const {
    data: universityData,
    isFetching,
    refetch,
  } = useGetAllUniversitiesQuery([
    { name: "page", value: page },
    { name: "sort", value: "id" },
    ...params,
  ]);
  const { data: countries } = useGetAllCountriesQuery(undefined);
  const [deleteUniversity] = useDeleteSingleUniversityMutation();

  const metaData = universityData?.meta;
  const handleDelete = async (id: string) => {
    const toastId = toast.loading("Deleting...");

    try {
      await deleteUniversity(id);
      toast.success("University deleted successfully", { id: toastId });
      refetch();
    } catch (err: any) {
      toast.error(err?.data?.message ?? "Delete failed", { id: toastId });
    }
  };

  const tableData = universityData?.data
    ?.filter((item) => !item.isDeleted)
    ?.map(({ _id, name, country }) => ({
      key: _id,
      name,
      country: country?.name,
    }));
  const countryFilters = useMemo(
    () =>
      countries?.data
        ?.filter((item) => !item.isDeleted)
        .map((country: any) => ({
          text: country?.name,
          value: country?._id,
        })),
    [countries]
  );

  const columns: TableColumnsType<TTableData> = [
    {
      title: "Name",
      key: "name",
      dataIndex: "name",
    },
    {
      title: "Country",
      key: "country",
      dataIndex: "country",
      filters: countryFilters,
    },
    {
      title: "Action",
      key: "x",
      render: (item) => {
        return (
          <Space>
            <Button onClick={() => handleDelete(item.key)}>Delete</Button>
          </Space>
        );
      },
      width: "1%",
    },
  ];

  const onChange: TableProps<TTableData>["onChange"] = (
    _pagination,
    filters,
    _sorter,
    extra
  ) => {
    if (extra.action === "filter") {
      const queryParams: TQueryParam[] = [];

      filters.country?.forEach((item) =>
        queryParams.push({ name: "country", value: item })
      );

      setParams(queryParams);
    }
  };

  return (
    <>
      <Table
        loading={isFetching}
        columns={columns}
        dataSource={tableData}
        onChange={onChange}
        pagination={false}
      />
      <Pagination
        current={page}
        onChange={(value) => setPage(value)}
        pageSize={metaData?.limit}
        total={metaData?.total}
      />
    </>
  );
};

export default UniversityData;
