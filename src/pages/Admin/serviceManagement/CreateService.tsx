import { Button, Col, Flex, Row } from "antd";
import type { FieldValues, SubmitHandler } from "react-hook-form";
import LBForm from "../../../components/form/LBForm";
import LBSelect from "../../../components/form/LBSelect";
import LBInput from "../../../components/form/LBInput";
import { useAddServiceMutation } from "../../../redux/features/admin/serviceManagement.api";
import { serviceCategoryOptions } from "../../../constants/services";
import type { TService } from "../../../types/service.types";
import type { TResponse } from "../../../types";
import { toast } from "sonner";

const CreateService = () => {
  const [addService] = useAddServiceMutation();
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const toastId = toast.loading("Creating...");
    const serviceData = {
      service: data,
    };
    try {
      const res = (await addService(serviceData)) as TResponse<TService>;
      console.log(res);
      if (res.error) {
        toast.error(res.error.data.message, { id: toastId });
      } else {
        toast.success("Services created", { id: toastId });
      }
    } catch (err) {
      toast.error("Something went wrong", { id: toastId });
    }
    console.log(serviceData);
  };

  return (
    <Flex justify="center" align="center">
      <Col span={24}>
        <LBForm onSubmit={onSubmit}>
          <Row gutter={8}>
            <Col span={24} md={{ span: 12 }} lg={{ span: 12 }}>
              <LBSelect
                label="Name"
                name="name"
                options={serviceCategoryOptions}
              />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 12 }}>
              <LBInput label="Definition" type="text" name="definition" />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 12 }}>
              <LBInput label="Description" type="textarea" name="description" />
            </Col>
          </Row>

          <Button htmlType="submit">Submit</Button>
        </LBForm>
      </Col>
    </Flex>
  );
};

export default CreateService;
