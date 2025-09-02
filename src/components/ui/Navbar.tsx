import { useState } from "react";
import { Layout, Menu, Button, Drawer, Grid } from "antd";
import { DownOutlined, MenuOutlined } from "@ant-design/icons";
import { NavLink } from "react-router-dom";
// import { useGetAllServicesQuery } from "../../redux/features/admin/serviceManagement.api";
import { useGetAllCountriesQuery } from "../../redux/features/admin/CountryManagement.api";

const { Header } = Layout;
const { useBreakpoint } = Grid;

const Navbar = () => {
  // const { data: service } = useGetAllServicesQuery(undefined);
  const { data: country } = useGetAllCountriesQuery(undefined);
  const [open, setOpen] = useState(false);
  const screens = useBreakpoint();

  // const serviceOptions =
  //   service?.data?.map((item) => ({
  //     key: `service-${item._id}`,
  //     label: (
  //       <NavLink
  //         to={`/service/${item._id}`}
  //         style={{
  //           fontWeight: "normal",
  //           fontSize: screens.md ? "18px" : "14px",
  //         }}
  //       >
  //         {item.name}
  //       </NavLink>
  //     ),
  //   })) || [];
  const countryOptions =
    country?.data
      ?.filter((item) => !item.isDeleted) // remove deleted rows
      .map((item) => ({
        key: `country-${item._id}`,
        label: (
          <NavLink
            to={`/country/${item._id}`}
            style={{
              fontWeight: "normal",
              fontSize: screens.md ? "18px" : "14px",
            }}
          >
            {`Study In ${item.name}`}
          </NavLink>
        ),
      })) || [];

  const menuItems = [
    { key: "home", label: <NavLink to="/">Home</NavLink> },
    {
      key: "universities",
      label: <NavLink to="/universities">Universities</NavLink>,
    },
    // {
    //   key: "service",
    //   label: (
    //     <span
    //       style={{
    //         display: "flex",
    //         justifyContent: "space-between",
    //         alignItems: "center",
    //       }}
    //     >
    //       <div>Our Services</div>
    //       <div>
    //         <DownOutlined />
    //       </div>
    //     </span>
    //   ),
    //   children: serviceOptions,
    // },
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
          <div>Study Abroad</div>
          <div>
            <DownOutlined />
          </div>
        </span>
      ),
      children: countryOptions,
    },
  ];

  return (
    <Header
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        // padding: "0 20px",
        background: "#fff",
        boxShadow: "0 2px 8px #f0f1f2",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", flex: 1 }}>
        <div
          style={{
            fontSize: screens.md ? "20px" : "16px",
            fontWeight: "bold",
            marginRight: screens.md ? "32px" : "10px",
            whiteSpace: "nowrap",
            color: "#318fe7ff",
            // boxShadow: "0 2px 8px #f0f1f2",
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
              <NavLink to="/login">Login</NavLink>
            </Button>
          </Drawer>
        </>
      )}
    </Header>
  );
};

export default Navbar;
