import { Button, Col, Flex } from "antd";
import type { FieldValues, SubmitHandler } from "react-hook-form";
import LBForm from "../../../components/form/LBForm";
import LBSelect from "../../../components/form/LBSelect";
import LBInput from "../../../components/form/LBInput";
import { useAddServiceMutation } from "../../../redux/features/admin/serviceManagement.api";
import { serviceCategoryOptions } from "../../../constants/services";

const serviceDefault = {
  name: "Interview Coaching",
  definition: "Training for academic or visa interviews.",
  description:
    "Through mock interviews and constructive feedback, we prepare you to answer questions confidently, present yourself professionally, and make a strong impression during your interview.",
};
const CreateService = () => {
  const [addService] = useAddServiceMutation();
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const serviceData = {
      service: data,
    };
    addService(serviceData);

    console.log(serviceData);
  };

  return (
    <Flex justify="center" align="center">
      <Col span={6}>
        <LBForm onSubmit={onSubmit} defaultValues={serviceDefault}>
          <LBSelect label="Name" name="name" options={serviceCategoryOptions} />
          <LBInput label="Definition" type="text" name="definition" />
          <LBInput label="Description" type="text" name="description" />
          <Button htmlType="submit">Submit</Button>
        </LBForm>
      </Col>
    </Flex>
  );
};

export default CreateService;
