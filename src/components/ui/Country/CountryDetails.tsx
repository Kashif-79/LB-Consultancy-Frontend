import { useParams } from "react-router-dom";
import { useGetSingleCountryQuery } from "../../../redux/features/admin/CountryManagement.api";
import img from "../../../assets/images/d-panyukov-_4ZLmHzwARY-unsplash.jpg";
import PageLayout from "../../layout/PageLayout";

const CountryDetails = () => {
  const { id } = useParams();
  const { data: country } = useGetSingleCountryQuery(id);
  return (
    <div>
      <PageLayout
        title={`Study In ${country?.data?.name}`}
        backgroundImage={img}
      >
        <h3>There should be a Country like NWC</h3>
      </PageLayout>
    </div>
  );
};

export default CountryDetails;
