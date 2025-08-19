import { Button, Col, Flex } from "antd";
import type { FieldValues, SubmitHandler } from "react-hook-form";
import LBForm from "../../../components/form/LBForm";
import LBInput from "../../../components/form/LBInput";
import { useAddCountryMutation } from "../../../redux/features/admin/CountryManagement.api";

const dummyCountryData = {
  name: "Canada",
  code: "CA",
  continent: "North America",
  currency: "Canadian Dollar",
  language: "English, French",
};

const CreateCountry = () => {
  const [addCountry] = useAddCountryMutation();
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const countryData = {
      country: data,
    };
    addCountry(countryData);

    console.log(countryData);
  };

  return (
    <Flex justify="center" align="center">
      <Col span={6}>
        <LBForm onSubmit={onSubmit} defaultValues={dummyCountryData}>
          <LBInput label="Name" type="text" name="name" />
          <LBInput label="Code" type="text" name="code" />
          <LBInput label="Continent" type="text" name="continent" />
          <LBInput label="Currency" type="text" name="currency" />
          <LBInput label="language" type="text" name="language" />
          <Button htmlType="submit">Submit</Button>
        </LBForm>
      </Col>
    </Flex>
  );
};

export default CreateCountry;
