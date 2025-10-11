import { Button, Layout, Space } from "antd";
import { Outlet, useNavigate } from "react-router-dom";
import { HomeOutlined, LogoutOutlined } from "@ant-design/icons";
import Sidebar from "./Sidebar";
import { useAppDispatch } from "../../redux/hooks";
import { logOut } from "../../redux/features/auth/authSlice";

const { Content, Header } = Layout;

function MainLayout() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logOut());
  };

  const goHome = () => {
    navigate("/");
  };

  return (
    <Layout style={{ height: "100%" }}>
      <Sidebar />
      <Layout>
        <Header
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            background: "#fff",
            padding: "0 20px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
          }}
        >
          <Space>
            <Button
              type="text"
              icon={<HomeOutlined style={{ fontSize: 20 }} />}
              onClick={goHome}
            >
              Home
            </Button>
          </Space>

          <Button
            type="primary"
            danger
            icon={<LogoutOutlined />}
            onClick={handleLogout}
          >
            Log Out
          </Button>
        </Header>

        <Content style={{ margin: "24px 16px 0" }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: "#fff",
              borderRadius: 8,
            }}
          >
            <Outlet />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
}

export default MainLayout;
