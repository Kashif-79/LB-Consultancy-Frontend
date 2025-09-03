import {
  Button,
  Pagination,
  Space,
  Table,
  type TableColumnsType,
  type TableProps,
} from "antd";
import { useState } from "react";

import type { TCountry, TQueryParam } from "../../../types";
import {
  useDeleteSingleCountryMutation,
  useGetAllCountriesQuery,
} from "../../../redux/features/admin/CountryManagement.api";
import { Link } from "react-router-dom";
import { toast } from "sonner";

export type TTableData = Pick<TCountry, "name" | "continent" | "code">;

const CountryData = () => {
  const [params, setParams] = useState<TQueryParam[]>([]);
  const [page, setPage] = useState(1);
  const {
    data: countryData,
    isFetching,
    refetch,
  } = useGetAllCountriesQuery([
    { name: "page", value: page },
    { name: "sort", value: "id" },
    ...params,
  ]);
  const [deleteCountry] = useDeleteSingleCountryMutation();

  const handleDelete = async (id: string) => {
    const toastId = toast.loading("Deleting...");

    try {
      await deleteCountry(id);
      toast.success("Country deleted successfully", { id: toastId });
      refetch();
    } catch (err: any) {
      toast.error(err?.data?.message ?? "Delete failed", { id: toastId });
    }
  };

  const metaData = countryData?.meta;

  const tableData = countryData?.data
    ?.filter((item) => !item.isDeleted)
    ?.map(({ _id, name, code, continent, isDeleted }) => ({
      key: _id,
      name,
      code,
      continent,
      isDeleted,
    }));
  const columns: TableColumnsType<TTableData> = [
    {
      title: "Name",
      key: "name",
      dataIndex: "name",
    },
    {
      title: "Code",
      key: "code",
      dataIndex: "code",
    },
    {
      title: "Continent",
      key: "continent",
      dataIndex: "continent",
      filters: [
        {
          text: "Asia",
          value: "Asia",
        },
        {
          text: "North America",
          value: "North America",
        },
        {
          text: "Europe",
          value: "Europe",
        },
      ],
    },
    {
      title: "Action",
      key: "x",
      render: (item) => {
        return (
          <Space>
            <Link to={`/admin/countries-data/update/${item.key}`}>
              <Button>Update</Button>
            </Link>
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

      filters.continent?.forEach((item) =>
        queryParams.push({ name: "continent", value: item })
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

export default CountryData;
