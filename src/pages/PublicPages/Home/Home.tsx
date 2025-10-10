import { useGetAllCountriesQuery } from "../../../redux/features/admin/CountryManagement.api";
import HeaderSection from "../../../components/ui/PublicLayoutComponents/HeaderSection";
import SectionTitle from "../../../components/ui/PublicLayoutComponents/SectionTitle";
import CardSection from "../../../components/ui/PublicLayoutComponents/CardSection";
import { useNavigate } from "react-router-dom";

import { Row, Col, Card } from "antd";
import {
  BankOutlined,
  FileSearchOutlined,
  TeamOutlined,
} from "@ant-design/icons";
import SuccessSection from "../../../components/ui/PublicLayoutComponents/SuccessSection";

const Home = () => {
  const { data: countries } = useGetAllCountriesQuery(undefined);
  const navigate = useNavigate();

  const img = "https://i.ibb.co.com/G4XbLk8J/pexels-sahil-1868676.jpg";
  const img2 =
    "https://i.ibb.co.com/sJsJ5Qyk/pexels-shkrabaanthony-7579312.jpg";
  console.log(countries);
  const cards = countries?.data
    ?.filter((country) => !country.isDeleted)
    .map((country) => ({
      title: country.name,
      description: `Study in the ${country.name} and experience a world-renowned education system. The ${country.name} is an ideal destination for students.`,
      id: country._id,
      onClick: () => navigate(`/country/${country._id}`),
    }));

  const services = [
    {
      icon: <TeamOutlined style={{ fontSize: 28, color: "#1a1a2e" }} />,
      title: "University Admission Support",
      desc: "Obtain your university admission with our comprehensive guidance",
    },
    {
      icon: <BankOutlined style={{ fontSize: 28, color: "#1a1a2e" }} />,
      title: "Application Support",
      desc: "Navigate applications effortlessly with our expert support",
    },
    {
      icon: <FileSearchOutlined style={{ fontSize: 28, color: "#1a1a2e" }} />,
      title: "Visa Application Support",
      desc: "Simplify visa applications with our comprehensive support and guidance",
    },
  ];

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
        </div>
      </section>
      <section>
        <div style={{ padding: "40px 20px", background: "#fafafa" }}>
          <h2 style={{ fontWeight: 700, marginBottom: 24 }}>OUR SERVICES</h2>

          <Row gutter={[32, 32]} align="middle">
            <Col xs={24} md={12}>
              <div
                style={{
                  borderRadius: 12,
                  overflow: "hidden",
                  height: "300px",
                  backgroundImage: `url(${img2})`, // Use the image as a background
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
            </Col>

            <Col xs={24} md={12}>
              {services.map((service, idx) => (
                <Card
                  key={idx}
                  bordered={false}
                  style={{ marginBottom: 16, borderRadius: 12 }}
                  bodyStyle={{
                    display: "flex",
                    gap: "16px",
                    alignItems: "flex-start",
                  }}
                >
                  {service.icon}
                  <div>
                    <h3 style={{ margin: 0, fontSize: 18 }}>{service.title}</h3>
                    <p style={{ margin: 0, color: "#555" }}>{service.desc}</p>
                  </div>
                </Card>
              ))}
            </Col>
          </Row>
        </div>
      </section>
      <SuccessSection />
    </div>
  );
};

export default Home;
