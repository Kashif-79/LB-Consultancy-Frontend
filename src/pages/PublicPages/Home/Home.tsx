import img from "../../../assets/images/d-panyukov-_4ZLmHzwARY-unsplash.jpg";
import { useGetAllCountriesQuery } from "../../../redux/features/admin/CountryManagement.api";
import { Button } from "antd";
import HeaderSection from "../../../components/ui/PublicLayoutComponents/HeaderSection";
import SectionTitle from "../../../components/ui/PublicLayoutComponents/SectionTitle";
import CardSection from "../../../components/ui/PublicLayoutComponents/CardSection";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const { data: countries } = useGetAllCountriesQuery(undefined);
  const navigate = useNavigate();
  console.log(countries);
  const cards = countries?.data
    ?.filter((country) => !country.isDeleted)
    .map((country) => ({
      title: country.name,
      description: `Study in the ${country.name} and experience a world-renowned education system. The ${country.name} is an ideal destination for students.`,
      id: country._id,
      onClick: () => navigate(`/country/${country._id}`),
    }));

  // const countryData = countries?.data
  //   ?.filter((country) => !country.isDeleted)
  //   .map((country) => ({
  //     id: country._id,
  //   }));
  // console.log(countryData);

  return (
    <div>
      <section>
        <HeaderSection
          title="Welcome to LB Consultancy"
          backgroundImage={img}
        />
        <SectionTitle
          title="Top Study Abroad Consultants"
          description="Build Your Dream Career with World-Class Education
         and Innovative Programs at Top Destinations Like the UK, Australia, Finland, Sweden, Denmark, and Germany!"
        />

        <CardSection cards={cards || []} variant="home" />
      </section>
      <section
        style={{
          background: "#72ade4ff",
        }}
      >
        <div style={{ padding: "40px 0", textAlign: "center", color: "white" }}>
          <SectionTitle
            title="We’re Here to Help You"
            description="We don’t just give the consultancy but we give care to your future."
          />
          <Link to="/eligibility">
            <Button
              type="primary"
              style={{
                padding: "12px 24px",
                fontSize: "16px",
                fontWeight: "bold",
              }}
            >
              Check Your Eligibility
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
