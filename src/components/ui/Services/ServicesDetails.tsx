import { useParams } from "react-router-dom";
import { useGetAllServicesQuery } from "../../../redux/features/admin/serviceManagement.api";

const ServicesDetails = () => {
  const { id } = useParams();
  console.log(id);
  const { data: service } = useGetAllServicesQuery(id);
  console.log(service);
  return (
    <div>
      <h1>{service?.data?.description}</h1>
    </div>
  );
};

export default ServicesDetails;
