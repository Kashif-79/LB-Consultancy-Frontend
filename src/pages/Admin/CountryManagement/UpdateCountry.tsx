import { Button, Col, Flex, Row } from "antd";
import type { FieldValues, SubmitHandler } from "react-hook-form";
import LBForm from "../../../components/form/LBForm";
import LBInput from "../../../components/form/LBInput";
import type { TCountry, TResponse } from "../../../types";
import { toast } from "sonner";
import { useParams } from "react-router-dom";

const dummyCountryData = {
  name: "Canada",
  code: "CA",
  continent: "North America",
  currency: "Canadian Dollar",
  language: "English, French",
};

const UpdateCountry = () => {
  const { id } = useParams();
  // const [updateCountry] = useUpdateSingleCountryQuery(id);
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const toastId = toast.loading("Creating...");
    const countryData = {
      country: data,
    };
    try {
      const res = (await updateCountry(countryData)) as TResponse<TCountry>;
      console.log(res);
      if (res.error) {
        toast.error(res.error.data.message, { id: toastId });
      } else {
        toast.success("Country updated", { id: toastId });
      }
    } catch (err) {
      toast.error("Something went wrong", { id: toastId });
    }
    console.log(countryData);
  };

  return (
    <Flex justify="center" align="center">
      <Col span={24}>
        <LBForm onSubmit={onSubmit} defaultValues={dummyCountryData}>
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
            <Col span={24} md={{ span: 24 }} lg={{ span: 24 }}>
              <LBInput label="language" type="text" name="language" />
            </Col>
            <Col span={24} md={{ span: 24 }} lg={{ span: 24 }}>
              <LBInput label="Why Study" type="textarea" name="whyStudy" />
            </Col>
            <Col span={24} md={{ span: 24 }} lg={{ span: 24 }}>
              <LBInput
                label="Requirements"
                type="textarea"
                name="requirements"
              />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 24 }}>
              <LBInput label="Expenses" type="textarea" name="expenses" />
            </Col>
          </Row>
          <Button htmlType="submit">Submit</Button>
        </LBForm>
      </Col>
    </Flex>
  );
};

export default UpdateCountry;
