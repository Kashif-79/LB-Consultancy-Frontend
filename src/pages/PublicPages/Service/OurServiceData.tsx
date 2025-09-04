import { Row, Col, Typography, Divider } from "antd";
import img from "../../../assets/images/pexels-cesarperez209-733745.jpg";
import { Footer } from "antd/es/layout/layout";
import { useParams } from "react-router-dom";
import { useGetSingleServiceQuery } from "../../../redux/features/admin/serviceManagement.api";
import HeaderSection from "../../../components/ui/PublicLayoutComponents/HeaderSection";
import SectionTitle from "../../../components/ui/PublicLayoutComponents/SectionTitle";
// const { Text } = Typography;
// const { Title, Paragraph } = Typography;

import { Button, Flex } from "antd";
import type { FieldValues, SubmitHandler } from "react-hook-form";
import LBForm from "../../../components/form/LBForm";
import LBInput from "../../../components/form/LBInput";

const onSubmit: SubmitHandler<FieldValues> = (data) => {
  console.log(data);
};

const OurServiceData = () => {
  const { id } = useParams();
  const { data: service } = useGetSingleServiceQuery(id);
  console.log(service);
  return (
    <div>
      <SectionTitle
        title="Here is Our Service"
        description="Explore the services we provide to help you achieve your study abroad dreams."
      />
      <div>
        <Row gutter={[24, 24]}>
          <Col span={24} sm={24} md={16} lg={16}>
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
          <Col span={24} sm={24} md={8} lg={8}>
            <div
              style={{
                padding: "40px 20px",
                border: "1px solid #ccc",
                borderRadius: "8px",
                maxWidth: "600px",
                margin: "0 auto",
                background: "#accaf8ff",
              }}
            >
              <Flex justify="center" align="center">
                <LBForm onSubmit={onSubmit}>
                  <Row gutter={8}>
                    <Col span={24} md={{ span: 24 }} lg={{ span: 24 }}>
                      <LBInput label="Name" type="text" name="name" />
                    </Col>
                    <Col span={24} md={{ span: 24 }} lg={{ span: 24 }}>
                      <LBInput label="Code" type="text" name="code" />
                    </Col>
                    <Col span={24} md={{ span: 24 }} lg={{ span: 24 }}>
                      <LBInput label="Continent" type="text" name="continent" />
                    </Col>
                    <Col span={24} md={{ span: 24 }} lg={{ span: 24 }}>
                      <LBInput label="Currency" type="text" name="currency" />
                    </Col>
                  </Row>
                  <div style={{ textAlign: "center" }}>
                    <Button htmlType="submit">Submit</Button>
                  </div>
                </LBForm>
              </Flex>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default OurServiceData;
