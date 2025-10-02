import { Row, Col, Divider } from "antd";

import { useParams } from "react-router-dom";
import { useGetSingleServiceQuery } from "../../../redux/features/admin/serviceManagement.api";
import SectionTitle from "../../../components/ui/PublicLayoutComponents/SectionTitle";
import HeaderSection from "../../../components/ui/PublicLayoutComponents/HeaderSection";

const OurServiceData = () => {
  const { id } = useParams();
  const { data: service } = useGetSingleServiceQuery(id);
  // console.log(service);
  const img = "https://i.ibb.co.com/sJsJ5Qyk/pexels-shkrabaanthony-7579312.jpg";
  return (
    <div>
      <HeaderSection title={`We Are Here To Help You`} backgroundImage={img} />
      <SectionTitle
        title="Here is Our Service"
        description="Explore the services we provide to help you achieve your study abroad dreams."
      />
      <div>
        <Row gutter={[24, 24]}>
          <Col span={24} sm={24} md={24} lg={24}>
            <div style={{ padding: "10px 20px", margin: "0 auto" }}>
              <Divider />
              <div>
                <h2
                  style={{
                    fontWeight: "bold",
                    fontSize: "24px",
                    marginBottom: "16px",
                  }}
                >
                  {service?.data?.name}
                </h2>
                <Divider />
                <h2
                  style={{
                    fontWeight: "bold",
                    fontSize: "24px",
                    marginBottom: "16px",
                  }}
                >
                  {service?.data?.definition}
                </h2>
                <p
                  style={{
                    fontWeight: "normal",
                    fontSize: "18px",
                    marginBottom: "12px",
                  }}
                >
                  {service?.data?.description}
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default OurServiceData;
