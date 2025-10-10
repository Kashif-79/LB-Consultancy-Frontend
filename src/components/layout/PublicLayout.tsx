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
          flex: 1,
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
        <Title level={5} style={{ color: "white" }}>
          Designed and Developed by Kashif.r.reza@gmail.com
        </Title>
      </Footer>
    </Layout>
  );
}

export default PublicLayout;
