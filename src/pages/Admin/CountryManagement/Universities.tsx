import {
  Pagination,
  Table,
  type TableColumnsType,
  type TableProps,
} from "antd";
import { useMemo, useState } from "react";

import type { TQueryParam, TUniversity } from "../../../types";
import { useGetAllCountriesQuery } from "../../../redux/features/admin/CountryManagement.api";
import { useGetAllUniversitiesQuery } from "../../../redux/features/admin/universityManagement.api";

export type TTableData = Pick<TUniversity, "name" | "country">;

const UniversityData = () => {
  const [params, setParams] = useState<TQueryParam[]>([]);
  const [page, setPage] = useState(1);
  const {
    data: universityData,
    isLoading,
    isFetching,
  } = useGetAllUniversitiesQuery([
    { name: "page", value: page },
    { name: "sort", value: "id" },
    ...params,
  ]);
  const { data: countries } = useGetAllCountriesQuery(undefined);

  console.log({ isLoading, isFetching });

  const metaData = universityData?.meta;

  const tableData = universityData?.data?.map(({ name, country }) => ({
    name,
    country: country.name,
  }));
  const countryFilters = useMemo(
    () =>
      countries?.data?.map((c: any) => ({
        text: c.name,
        value: c._id,
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
