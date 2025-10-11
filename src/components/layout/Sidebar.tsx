import { Layout, Menu } from "antd";
import { verifyToken } from "../../utils/verifyToken";
import { useAppSelector } from "../../redux/hooks";
import { useCurrentToken } from "../../redux/features/auth/authSlice";
import { sidebarItemsGenerator } from "../../utils/sidebarItemsGenerator";
import { adminPaths } from "../../routes/admin.routes";
import { consultantPaths } from "../../routes/consultant.routes";
import { Link } from "react-router-dom";

const { Sider } = Layout;

const userRole = {
  SUPER_ADMIN: "superAdmin",
  ADMIN: "admin",
  CONSULTANT: "consultant",
  STUDENT: "student",
};

const Sidebar = () => {
  const token = useAppSelector(useCurrentToken);

  let user;
  if (token) {
    user = verifyToken(token);
  }
  let sideBarItems;

  if (user?.role === userRole.ADMIN || user?.role === userRole.SUPER_ADMIN) {
    sideBarItems = sidebarItemsGenerator(adminPaths, userRole.ADMIN);
  }
  if (user?.role === userRole.CONSULTANT) {
    sideBarItems = sidebarItemsGenerator(consultantPaths, userRole.CONSULTANT);
  }

  if (!user?.role) {
    return null;
  }

  return (
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
      style={{
        height: "100vh",
        position: "sticky",
        top: "0",
        left: "0",
        background: "#001529",
      }}
    >
      <div
        style={{
          textAlign: "center",
          height: "4rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "rgba(255, 255, 255, 0.05)",
        }}
      >
        <Link
          to="/"
          style={{
            textDecoration: "none",
          }}
        >
          <h1
            style={{
              fontSize: "22px",
              fontWeight: 700,
              margin: 0,
              letterSpacing: "0.5px",
              background: "linear-gradient(90deg, #40a9ff, #69c0ff, #096dd9)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              transition: "transform 0.3s ease",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "scale(1.05)")
            }
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            LB Consultancy
          </h1>
        </Link>
      </div>

      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["4"]}
        items={sideBarItems}
      />
    </Sider>
  );
};

export default Sidebar;
