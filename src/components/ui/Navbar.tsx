import { useState } from "react";
import { Layout, Menu, Button, Drawer, Grid } from "antd";
import { DownOutlined, MenuOutlined } from "@ant-design/icons";
import { NavLink } from "react-router-dom";
import { useGetAllCountriesQuery } from "../../redux/features/admin/CountryManagement.api";
import { useGetAllServicesQuery } from "../../redux/features/admin/serviceManagement.api";
import { useAppSelector } from "../../redux/hooks";
import {
  selectCurrentUser,
  selectIsLoggedIn,
} from "../../redux/features/auth/authSlice";

const { Header } = Layout;
const { useBreakpoint } = Grid;

const Navbar = () => {
  const isLoggedIn = useAppSelector(selectIsLoggedIn);
  const user = useAppSelector(selectCurrentUser);
  const { data: country } = useGetAllCountriesQuery(undefined);
  const { data: service } = useGetAllServicesQuery(undefined);
  const [open, setOpen] = useState(false);
  const screens = useBreakpoint();

  // Country dropdown
  const countryOptions =
    country?.data
      ?.filter((item) => !item.isDeleted)
      ?.map((item) => ({
        key: `country-${item._id}`,
        label: (
          <NavLink
            to={`/country/${item._id}`}
            style={{
              fontWeight: "normal",
              fontSize: screens.md ? "22px" : "14px",
            }}
          >
            Study In {item.name}
          </NavLink>
        ),
      })) || [];

  // Services dropdown
  const serviceOptions =
    service?.data?.map((item) => ({
      key: `service-${item._id}`,
      label: (
        <NavLink
          to={`/service/${item._id}`}
          style={{
            fontWeight: "normal",
            fontSize: screens.md ? "22px" : "14px",
          }}
        >
          {item.name}
        </NavLink>
      ),
    })) || [];

  const menuItems = [
    { key: "home", label: <NavLink to="/">Home</NavLink> },
    {
      key: "universities",
      label: <NavLink to="/universities">Universities</NavLink>,
    },
    {
      key: "country",
      label: (
        <span
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <span>Study Abroad</span>
          {screens.md && <DownOutlined />}
        </span>
      ),
      children: countryOptions,
    },
    {
      key: "services",
      label: (
        <span
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <span>Our Services</span>
          {screens.md && <DownOutlined />}
        </span>
      ),
      children: serviceOptions,
    },
  ];
  return (
    <Header
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        background: "#fff",
        boxShadow: "0 2px 8px #f0f1f2",
        padding: "0 16px",
        height: "64px",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", flex: 1 }}>
        <div
          style={{
            fontSize: screens.md ? "20px" : "16px",
            fontWeight: "bold",
            marginRight: screens.md ? "32px" : "10px",
            whiteSpace: "nowrap",
            color: "#1677ff",
          }}
        >
          <NavLink to="/" style={{ color: "#1677ff" }}>
            LB Consultancy
          </NavLink>
        </div>

        {/* Desktop Menu */}
        {screens.md && (
          <Menu
            mode="horizontal"
            items={menuItems}
            style={{
              borderBottom: "none",
              fontSize: "20px",
              flex: 1,
              background: "transparent",
            }}
            theme="light"
          />
        )}
      </div>

      {screens.md ? (
        <Button
          type="primary"
          style={{
            fontSize: "15px",
            fontWeight: "500",
            height: "40px",
          }}
        >
          <NavLink
            to={isLoggedIn ? `/${user?.role}/dashboard` : "/login"}
            style={{ color: "#fff" }}
          >
            {isLoggedIn ? "Dashboard" : "Admin Login"}
          </NavLink>
        </Button>
      ) : (
        <>
          <Button
            type="text"
            icon={<MenuOutlined />}
            onClick={() => setOpen(true)}
            style={{ fontSize: "18px", width: "40px", height: "40px" }}
          />
          <Drawer
            title="Menu"
            placement="right"
            onClose={() => setOpen(false)}
            open={open}
            width={300}
            styles={{
              header: { borderBottom: "1px solid #f0f0f0" },
              body: { padding: 0 },
            }}
          >
            <Menu mode="inline" items={menuItems} style={{ border: "none" }} />
            <div style={{ padding: "16px", borderTop: "1px solid #f0f0f0" }}>
              <Button
                type="primary"
                style={{
                  fontSize: "15px",
                  fontWeight: "500",
                  height: "40px",
                }}
              >
                <NavLink
                  to={isLoggedIn ? `/${user?.role}/dashboard` : "/login"}
                  style={{ color: "#fff" }}
                >
                  {isLoggedIn ? "Dashboard" : "Admin Login"}
                </NavLink>
              </Button>
            </div>
          </Drawer>
        </>
      )}
    </Header>
  );
};

export default Navbar;
