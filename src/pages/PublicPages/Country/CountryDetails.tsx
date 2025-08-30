import { useParams } from "react-router-dom";
import { useGetSingleCountryQuery } from "../../../redux/features/admin/CountryManagement.api";
import img from "../../../assets/images/d-panyukov-_4ZLmHzwARY-unsplash.jpg";
import HeaderSection from "../../../components/ui/PublicLayoutComponents/HeaderSection";
import SectionTitle from "../../../components/ui/PublicLayoutComponents/SectionTitle";
import { Divider } from "antd";

const CountryDetails = () => {
  const { id } = useParams();
  const { data: country } = useGetSingleCountryQuery(id);
  console.log(country);
  return (
    <div>
      <HeaderSection
        title={`Study In ${country?.data?.name}`}
        backgroundImage={img}
      />
      <SectionTitle
        title={`Study In ${country?.data?.name}`}
        description="Explore the best countries around the world. And find the perfect place for your studies."
      />
      <div style={{ padding: "10px 20px", margin: "0 auto" }}>
        <Divider />
        <div>
          {" "}
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
              fontSize: "18px",
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
              fontSize: "18px",
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
              fontSize: "18px",
              marginBottom: "12px",
            }}
          >
            {country?.data?.expenses}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CountryDetails;
