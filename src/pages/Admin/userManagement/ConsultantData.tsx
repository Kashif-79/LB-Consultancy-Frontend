import {
  Button,
  Pagination,
  Space,
  Table,
  type TableColumnsType,
  type TableProps,
} from "antd";
import { useState } from "react";
import { useGetAllConsultantsQuery } from "../../../redux/features/admin/userManagement.api";
import { Link } from "react-router-dom";
import type { TConsultant, TQueryParam } from "../../../types";

export type TTableData = Pick<TConsultant, "email" | "contactNo">;

const ConsultantData = () => {
  const [params, setParams] = useState<TQueryParam[]>([]);
  const [page, setPage] = useState(1);
  const {
    data: consultantData,
    isLoading,
    isFetching,
  } = useGetAllConsultantsQuery([
    { name: "page", value: page },
    { name: "sort", value: "id" },
    ...params,
  ]);

  console.log({ isLoading, isFetching });

  const metaData = consultantData?.meta;

  const tableData = consultantData?.data?.map(
    ({ _id, email, contactNo, name }) => ({
      key: _id,
      email,
      name: name.firstName,
      contactNo,
    })
  );

  const columns: TableColumnsType<TTableData> = [
    {
      title: "Name",
      key: "name",
      dataIndex: "name",
    },
    {
      title: "Email",
      key: "email",
      dataIndex: "email",
    },
    {
      title: "Contact No.",
      key: "contactNo",
      dataIndex: "contactNo",
    },
    {
      title: "Action",
      key: "action",
      render: (item) => {
        console.log(item);
        return (
          <Space>
            <Link to={`/admin/consultants-data/${item.key}`}>
              <Button>Details</Button>
            </Link>
            <Link to={`/admin/consultants-data/update/${item.key}`}>
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

      filters.name?.forEach((item) =>
        queryParams.push({ name: "name", value: item })
      );

      filters.year?.forEach((item) =>
        queryParams.push({ name: "year", value: item })
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

export default ConsultantData;
