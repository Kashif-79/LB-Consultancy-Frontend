import { useParams } from "react-router-dom";
import { useGetSingleAdminQuery } from "../../../redux/features/admin/userManagement.api";
import { Card, Descriptions, Spin } from "antd";

const AdminDetails = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetSingleAdminQuery(id);

  if (isLoading) {
    return (
      <div
        style={{ display: "flex", justifyContent: "center", padding: "50px" }}
      >
        <Spin size="large" />
      </div>
    );
  }
  return (
    <Card>
      <Descriptions title="User Info">
        <Descriptions.Item label="UserName">
          {data?.data.name.firstName}
        </Descriptions.Item>
        <Descriptions.Item label="Phone">
          {data?.data?.contactNo}
        </Descriptions.Item>
        <Descriptions.Item label="Gender">
          {data?.data?.gender}
        </Descriptions.Item>
        <Descriptions.Item label="email">{data?.data?.email}</Descriptions.Item>
        <Descriptions.Item label="emergencyContactNo">
          {data?.data?.emergencyContactNo}
        </Descriptions.Item>
        <Descriptions.Item label="permanentAddress">
          {data?.data?.permanentAddress}
        </Descriptions.Item>
        <Descriptions.Item label="presentAddress">
          {data?.data?.presentAddress}
        </Descriptions.Item>
      </Descriptions>
    </Card>
  );
};

export default AdminDetails;
