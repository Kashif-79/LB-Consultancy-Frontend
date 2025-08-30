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
import { useGetAllCountriesQuery } from "../../../redux/features/admin/CountryManagement.api";
import { Link } from "react-router-dom";

export type TTableData = Pick<TCountry, "name" | "continent" | "code">;

const CountryData = () => {
  const [params, setParams] = useState<TQueryParam[]>([]);
  const [page, setPage] = useState(1);
  const {
    data: countryData,
    isLoading,
    isFetching,
  } = useGetAllCountriesQuery([
    { name: "page", value: page },
    { name: "sort", value: "id" },
    ...params,
  ]);

  console.log({ isLoading, isFetching });

  const metaData = countryData?.meta;

  const tableData = countryData?.data?.map(({ name, code, continent }) => ({
    name,
    code,
    continent,
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
      ],
    },
    {
      title: "Action",
      key: "x",
      render: (item) => {
        console.log(item);
        return (
          <Space>
            <Link to={`/admin/country-data/${item.key}`}>
              <Button>Update</Button>
            </Link>
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
