import { useParams } from "react-router-dom";
import { useGetSingleCountryQuery } from "../../../redux/features/admin/CountryManagement.api";
import img from "../../../assets/images/d-panyukov-_4ZLmHzwARY-unsplash.jpg";
import PageLayout from "../../layout/PageLayout";

const CountryDetails = () => {
  const { id } = useParams();
  const { data: country } = useGetSingleCountryQuery(id);
  console.log(country);
  return (
    <div>
      <PageLayout
        title={`Study In ${country?.data?.name}`}
        backgroundImage={img}
        layoutType="single"
      >
        <div>
          <div>
            <h2
              style={{
                fontWeight: "bold",
                fontSize: "24px",
                marginBottom: "16px",
              }}
            >
              Why Study In {country?.data?.name}?
            </h2>
            <p
              style={{
                fontWeight: "normal",
                fontSize: "16px",
                marginBottom: "12px",
              }}
            >
              {country?.data?.whyStudy}
            </p>
          </div>
          <div>
            <h2
              style={{
                fontWeight: "bold",
                fontSize: "24px",
                marginBottom: "16px",
              }}
            >
              Requirement For Study in {country?.data?.name}
            </h2>
            <p
              style={{
                fontSize: "16px",
                marginBottom: "12px",
              }}
            >
              {country?.data?.requirements}
            </p>
          </div>
          <div>
            <h2
              style={{
                fontWeight: "bold",
                fontSize: "24px",
                marginBottom: "16px",
              }}
            >
              Expenses For Study in {country?.data?.name}
            </h2>
            <p
              style={{
                fontSize: "16px",
                marginBottom: "12px",
              }}
            >
              {country?.data?.expenses}
            </p>
          </div>
        </div>
      </PageLayout>
    </div>
  );
};

export default CountryDetails;
