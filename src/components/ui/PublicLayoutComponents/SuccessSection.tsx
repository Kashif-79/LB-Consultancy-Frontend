import { Row, Col, Card, Typography } from "antd";
import {
  UsergroupAddOutlined,
  GlobalOutlined,
  BankOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";

const { Title, Text } = Typography;

const successData = [
  {
    icon: (
      <UsergroupAddOutlined style={{ fontSize: "40px", color: "#1890ff" }} />
    ),
    number: "1000+",
    label: "Students Guided",
  },
  {
    icon: <GlobalOutlined style={{ fontSize: "40px", color: "#52c41a" }} />,
    number: "20+",
    label: "Countries Covered",
  },
  {
    icon: <BankOutlined style={{ fontSize: "40px", color: "#faad14" }} />,
    number: "50+",
    label: "Partner Universities",
  },
  {
    icon: (
      <CheckCircleOutlined style={{ fontSize: "40px", color: "#eb2f96" }} />
    ),
    number: "95%",
    label: "Admission Success Rate",
  },
];

const SuccessSection = () => {
  return (
    <div style={{ padding: "60px 20px", backgroundColor: "#f0f2f5" }}>
      <Title level={2} style={{ textAlign: "center", marginBottom: "40px" }}>
        Our Success
      </Title>
      <Row gutter={[24, 24]} justify="center">
        {successData.map((item, index) => (
          <Col xs={24} sm={12} md={6} key={index}>
            <Card
              hoverable
              style={{ textAlign: "center", borderRadius: "8px" }}
              bodyStyle={{ padding: "30px" }}
            >
              <div>{item.icon}</div>
              <Title
                level={3}
                style={{ marginTop: "15px", marginBottom: "5px" }}
              >
                {item.number}
              </Title>
              <Text strong>{item.label}</Text>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default SuccessSection;
