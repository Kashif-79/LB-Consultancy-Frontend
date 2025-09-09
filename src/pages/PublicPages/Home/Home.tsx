import img from "../../../assets/images/d-panyukov-_4ZLmHzwARY-unsplash.jpg";
import { useGetAllCountriesQuery } from "../../../redux/features/admin/CountryManagement.api";
import { Button } from "antd";
import HeaderSection from "../../../components/ui/PublicLayoutComponents/HeaderSection";
import SectionTitle from "../../../components/ui/PublicLayoutComponents/SectionTitle";
import CardSection from "../../../components/ui/PublicLayoutComponents/CardSection";
import { Link, useNavigate } from "react-router-dom";

import { Row, Col, Card } from "antd";
import {
  BankOutlined,
  FileSearchOutlined,
  TeamOutlined,
  BookOutlined,
} from "@ant-design/icons";

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

  const services = [
    {
      icon: <TeamOutlined style={{ fontSize: 28, color: "#1a1a2e" }} />,
      title: "University Admission Support",
      desc: "Obtain your university admission with our comprehensive guidance",
    },
    {
      icon: <BankOutlined style={{ fontSize: 28, color: "#1a1a2e" }} />,
      title: "Finance Application Support",
      desc: "Navigate financial applications effortlessly with our expert support",
    },
    {
      icon: <FileSearchOutlined style={{ fontSize: 28, color: "#1a1a2e" }} />,
      title: "Visa Application Support",
      desc: "Simplify visa applications with our comprehensive support and guidance",
    },
    {
      icon: <BookOutlined style={{ fontSize: 28, color: "#1a1a2e" }} />,
      title: "IELTS 360",
      desc: "Boost your confidence & proficiency with our specialized IELTS program",
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
      <section>
        <div style={{ padding: "40px 20px", background: "#fafafa" }}>
          <h2 style={{ fontWeight: 700, marginBottom: 24 }}>OUR SERVICES</h2>

          <Row gutter={[32, 32]} align="middle">
            {/* Left side - Image/Video */}
            <Col xs={24} md={12}>
              <div style={{ borderRadius: 12, overflow: "hidden" }}>
                <iframe
                  width="100%"
                  height="300"
                  src="https://www.youtube.com/embed/yourVideoId"
                  title="Study Abroad"
                  frameBorder="0"
                  allowFullScreen
                />
              </div>
            </Col>

            {/* Right side - Services list */}
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
    </div>
  );
};

export default Home;
