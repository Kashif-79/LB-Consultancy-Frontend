import AdminDashBoard from "../pages/Admin/AdminDashBoard";
import CountryData from "../pages/Admin/CountryManagement/Countries";
import CreateCountry from "../pages/Admin/CountryManagement/CreateCountry";
import CreateUniversity from "../pages/Admin/universityManagement/CreateUniversity";
import UniversityData from "../pages/Admin/universityManagement/Universities";
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
import ConsultantsDetails from "../pages/Admin/userManagement/ConsultantsDetails";
import AdminDetails from "../pages/Admin/userManagement/AdminDetails";
import UpdateStudent from "../pages/Admin/userManagement/UpdateStudent";
import UpdateConsultant from "../pages/Admin/userManagement/UpdateConsultant";
import UpdateAdmin from "../pages/Admin/userManagement/UpdateAdmin";

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
        path: "students-data/update/:id",
        element: <UpdateStudent />,
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
        path: "consultants-data/:id",
        element: <ConsultantsDetails />,
      },
      {
        path: "consultants-data/update/:id",
        element: <UpdateConsultant />,
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
      {
        path: "admins-data/:id",
        element: <AdminDetails />,
      },
      {
        path: "admins-data/update/:id",
        element: <UpdateAdmin />,
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
    ],
  },
  {
    name: "University Management",
    children: [
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
