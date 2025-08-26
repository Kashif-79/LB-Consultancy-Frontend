import { Layout } from "antd";
import { Outlet } from "react-router-dom";
import Navbar from "../ui/Navbar";

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
      </Layout>
    </Layout>
  );
}

export default PublicLayout;
