import { useState } from "react";
import { Layout, Menu, Button, Drawer, Grid } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import { NavLink } from "react-router-dom";

const { Header } = Layout;
const { useBreakpoint } = Grid;

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const screens = useBreakpoint();

  const menuItems = [
    { key: "home", label: <NavLink to="/">Home</NavLink> },
    { key: "about", label: <NavLink to="/about">About</NavLink> },
    { key: "services", label: <NavLink to="/services">Services</NavLink> },
  ];

  return (
    <Header
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 20px",
        background: "#fff",
        // boxShadow: "0 2px 8px #f0f1f2",
      }}
    >
      {/* Left side: Logo + Menu */}
      <div style={{ display: "flex", alignItems: "center", flex: 1 }}>
        <div
          style={{
            fontSize: screens.md ? "20px" : "16px", // ✅ smaller on mobile
            fontWeight: "bold",
            marginRight: screens.md ? "30px" : "10px", // less gap on mobile
            whiteSpace: "nowrap", // ✅ prevent text from breaking
          }}
        >
          LB Consultancy
        </div>

        {screens.md && (
          <Menu
            mode="horizontal"
            items={menuItems}
            style={{
              borderBottom: "none",
              flex: 1,
              fontSize: "20px",
            }}
            overflowedIndicator={null}
          />
        )}
      </div>

      {screens.md ? (
        <Button
          type="primary"
          style={{
            marginRight: "10px",
            fontSize: "15px",
          }}
        >
          <NavLink to="/login">Login</NavLink>
        </Button>
      ) : (
        <>
          <Button
            type="text"
            icon={<MenuOutlined />}
            onClick={() => setOpen(true)}
          />
          <Drawer
            title="Menu"
            placement="right"
            onClose={() => setOpen(false)}
            open={open}
          >
            <Menu mode="vertical" items={menuItems} />
            <Button type="primary" block style={{ marginTop: "16px" }}>
              Login
            </Button>
          </Drawer>
        </>
      )}
    </Header>
  );
};

export default Navbar;
