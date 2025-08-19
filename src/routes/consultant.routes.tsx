import CreateService from "../pages/Admin/serviceManagement/CreateService";
import ServiceData from "../pages/Admin/serviceManagement/Service";

import CreateStudent from "../pages/Admin/userManagement/CreateStudent";
import StudentData from "../pages/Admin/userManagement/StudentData";
import ConsultantDashboard from "../pages/Consultant/Consultant.Dashboard";

export const consultantPaths = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <ConsultantDashboard />,
  },
  {
    name: "User Management",
    children: [
      {
        name: "Create Student",
        path: "create-student",
        element: <CreateStudent />,
      },
      {
        name: "Students",
        path: "students-data",
        element: <StudentData />,
      },
    ],
  },
  {
    name: "Service Management",
    children: [
      {
        name: "Create Service",
        path: "create-service",
        element: <CreateService />,
      },
      {
        name: "Services",
        path: "service-data",
        element: <ServiceData />,
      },
    ],
  },
];
