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
  ADIMN: "admin",
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

  if (user?.role === userRole.ADIMN) {
    sideBarItems = sidebarItemsGenerator(adminPaths, userRole.ADIMN);
  }
  if (user?.role === userRole.CONSULTANT) {
    sideBarItems = sidebarItemsGenerator(consultantPaths, userRole.CONSULTANT);
  }
  // if (user?.role === userRole.STUDENT) {
  //   sideBarItems = sidebarItemsGenerator(studentPaths, userRole.STUDENT);
  // }

  if (!user?.role) {
    return null;
  }

  return (
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
      style={{ height: "100vh", position: "sticky", top: "0", left: "0" }}
    >
      <div
        style={{
          color: "white",
          textAlign: "center",
          height: "4rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Link to="/">
          <h1>LB Consultancy</h1>
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
