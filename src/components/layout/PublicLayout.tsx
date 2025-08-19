import { Layout } from "antd";
import { Outlet } from "react-router-dom";

const { Content } = Layout;

function PublicLayout() {
  return (
    <Layout style={{ height: "100%" }}>
      <Layout>
        <Content style={{ margin: "24px 16px 0" }}>
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
