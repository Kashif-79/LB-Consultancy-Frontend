import { Layout, Typography } from "antd";
import { Outlet } from "react-router-dom";
import Navbar from "../ui/Navbar";

const { Footer, Content } = Layout;
const { Title, Text } = Typography;

function PublicLayout() {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Navbar />
      <Content
        style={{
          flex: 1, // Allow Content to stretch and fill the remaining space
          padding: 24,
        }}
      >
        <Outlet />
      </Content>
      <Footer
        style={{
          background: "#72ade4ff",
          color: "white",
          textAlign: "center",
        }}
      >
        <Title level={4} style={{ color: "white" }}>
          LB Consultancy
        </Title>
        <Text style={{ color: "#ccc" }}>
          © {new Date().getFullYear()} All Rights Reserved.
        </Text>
      </Footer>
    </Layout>
  );
}

export default PublicLayout;
