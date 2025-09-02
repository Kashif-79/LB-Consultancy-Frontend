import AdminDashBoard from "../pages/Admin/AdminDashBoard";
import CountryData from "../pages/Admin/CountryManagement/Countries";
import CreateCountry from "../pages/Admin/CountryManagement/CreateCountry";
import CreateUniversity from "../pages/Admin/CountryManagement/CreateUniversity";
import UniversityData from "../pages/Admin/CountryManagement/Universities";
import UpdateCountry from "../pages/Admin/CountryManagement/UpdateCountry";
import CreateService from "../pages/Admin/serviceManagement/CreateService";
import ServiceData from "../pages/Admin/serviceManagement/Service";
import UpdateService from "../pages/Admin/serviceManagement/UpdateService";
import AdminData from "../pages/Admin/userManagement/AdminData";
import ConsultantData from "../pages/Admin/userManagement/ConsultantData";
import CreateAdmin from "../pages/Admin/userManagement/CreateAdmin";
import CreateConsultant from "../pages/Admin/userManagement/CreateConsultant";
import CreateStudent from "../pages/Admin/userManagement/CreateStudent";
import StudentData from "../pages/Admin/userManagement/StudentData";
import StudentDetails from "../pages/Admin/userManagement/StudentDetails";

export const adminPaths = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <AdminDashBoard />,
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
      {
        path: "students-data/:stuId",
        element: <StudentDetails />,
      },
      {
        name: "Create-Consultant",
        path: "create-consultant",
        element: <CreateConsultant />,
      },
      {
        name: "Consultants",
        path: "consultants-data",
        element: <ConsultantData />,
      },
      {
        name: "Create-Admin",
        path: "create-admin",
        element: <CreateAdmin />,
      },
      {
        name: "Admins",
        path: "admins-data",
        element: <AdminData />,
      },
      //   {
      //     path: "student-data/:studentId",
      //     element: <StudentDetails />,
      //   },
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
      {
        path: "service-data/update/:id",
        element: <UpdateService />,
      },
    ],
  },
  {
    name: "Country Management",
    children: [
      {
        name: "Create Country",
        path: "create-country",
        element: <CreateCountry />,
      },
      {
        name: "Countries",
        path: "countries-data",
        element: <CountryData />,
      },
      {
        path: "countries-data/update/:id",
        element: <UpdateCountry />,
      },
      {
        name: "Create University",
        path: "create-university",
        element: <CreateUniversity />,
      },
      {
        name: "Universities",
        path: "university-data",
        element: <UniversityData />,
      },
    ],
  },
];
