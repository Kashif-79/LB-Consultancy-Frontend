import { Layout, Typography } from "antd";
import { Outlet } from "react-router-dom";
import Navbar from "../ui/Navbar";
const { Footer } = Layout;
const { Title, Text } = Typography;

const { Content } = Layout;

function PublicLayout() {
  return (
    <Layout style={{ height: "100%" }}>
      <Layout>
        <Navbar />
        <Content>
          <div
            style={{
              padding: 24,
              minHeight: 360,
            }}
          >
            <Outlet />
          </div>
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
    </Layout>
  );
}

export default PublicLayout;
