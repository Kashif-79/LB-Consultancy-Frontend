import { toast } from "sonner";
import { Button, Col, Flex, Row } from "antd";
import LBForm from "../../../components/form/LBForm";
import LBSelect from "../../../components/form/LBSelect";
import { serviceCategoryOptions } from "../../../constants/services";
import LBInput from "../../../components/form/LBInput";
import type { FieldValues, SubmitHandler } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import {
  useGetSingleServiceQuery,
  useUpdateServiceMutation,
} from "../../../redux/features/admin/serviceManagement.api";

const UpdateService = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: service, refetch, isFetching } = useGetSingleServiceQuery(id);
  const [updateService] = useUpdateServiceMutation();

  const serviceData = {
    // name: service?.data.name,
    definition: service?.data.definition,
    description: service?.data.description,
  };
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const updateData = {
      id,
      data: {
        service: data,
      },
    };
    const toastId = toast.loading("Updating...");
    try {
      await updateService(updateData);
      navigate(-1);
      refetch();
      toast.success("Service updated successfully", { id: toastId });
    } catch (err: any) {
      toast.error(err?.data?.message ?? "Update failed", { id: toastId });
    }
    console.log("updateData", updateData);
  };

  if (isFetching || !service) return <div>Loading...</div>;

  return (
    <Flex justify="center" align="center">
      <Col span={24}>
        <LBForm onSubmit={onSubmit} defaultValues={serviceData}>
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
              <LBInput label="Description" type="text" name="description" />
            </Col>
          </Row>
          <Button htmlType="submit">Submit</Button>
        </LBForm>
      </Col>
    </Flex>
  );
};

export default UpdateService;
