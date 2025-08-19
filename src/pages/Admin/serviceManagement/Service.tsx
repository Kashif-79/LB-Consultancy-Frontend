import {
  Button,
  Pagination,
  Space,
  Table,
  type TableColumnsType,
  type TableProps,
} from "antd";
import { useState } from "react";
import { Link } from "react-router-dom";
import type { TQueryParam } from "../../../types";
import type { TService } from "../../../types/service.types";
import { useGetAllServicesQuery } from "../../../redux/features/admin/serviceManagement.api";

export type TTableData = Pick<TService, "name" | "definition" | "isActive">;

const ServiceData = () => {
  const [params, setParams] = useState<TQueryParam[]>([]);
  const [page, setPage] = useState(1);
  const {
    data: serviceData,
    isLoading,
    isFetching,
  } = useGetAllServicesQuery([
    { name: "page", value: page },
    { name: "sort", value: "id" },
    ...params,
  ]);

  console.log({ isLoading, isFetching });

  const metaData = serviceData?.meta;

  const tableData = serviceData?.data?.map(
    ({ name, isActive, definition }) => ({
      name,
      isActive,
      definition,
    })
  );

  const columns: TableColumnsType<TTableData> = [
    {
      title: "Name",
      key: "name",
      dataIndex: "name",
      filters: [
        {
          text: "Visa",
          value: "Visa",
        },
        {
          text: "Admission",
          value: "Admission",
        },
      ],
    },
    {
      title: "Definition",
      key: "definition",
      dataIndex: "definition",
    },
    // {
    //   title: "IsActive",
    //   key: "isActive",
    //   dataIndex: "isActive",
    // },
    {
      title: "Action",
      key: "x",
      render: (item) => {
        console.log(item);
        return (
          <Space>
            <Link to={`/admin/service-data/${item.key}`}>
              <Button>Details</Button>
            </Link>
            <Button>Update</Button>
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

      filters.name?.forEach((item) =>
        queryParams.push({ name: "name", value: item })
      );

      //   filters.year?.forEach((item) =>
      //     queryParams.push({ name: "year", value: item })
      //   );

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

export default ServiceData;
