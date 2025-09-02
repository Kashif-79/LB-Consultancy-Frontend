import { Button, Col, Flex, Row } from "antd";
import type { FieldValues, SubmitHandler } from "react-hook-form";
import LBForm from "../../../components/form/LBForm";
import LBInput from "../../../components/form/LBInput";

const Eligibility = () => {
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
  };

  return (
    <div
      style={{
        padding: "40px 20px",
        border: "1px solid #ccc",
        borderRadius: "8px",
        maxWidth: "600px",
        margin: "0 auto",
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
  );
};

export default Eligibility;
