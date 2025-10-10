import {
  //   Controller,
  type FieldValues,
  type SubmitHandler,
} from "react-hook-form";
import { Button, Col, Divider, Row } from "antd";
import {
  bloodGroupsOptions,
  gendersOptions,
  type TConsultant,
  type TResponse,
} from "../../../types";
import LBInput from "../../../components/form/LBInput";
import LBSelect from "../../../components/form/LBSelect";
import LBDatePicker from "../../../components/form/LBDatePicker";
import LBForm from "../../../components/form/LBForm";
import { useAddConsultantMutation } from "../../../redux/features/admin/userManagement.api";
import { toast } from "sonner";

const CreateConsultant = () => {
  const [addConsutant] = useAddConsultantMutation();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const toastId = toast.loading("Creating...");
    const consultantData = {
      password: "C111",
      consultant: data,
    };
    try {
      const res = (await addConsutant(
        consultantData
      )) as TResponse<TConsultant>;
      console.log(res);
      if (res.error) {
        toast.error(res.error.data.message, { id: toastId });
      } else {
        toast.success("Consultant created", { id: toastId });
      }
    } catch (err) {
      toast.error("Something went wrong", { id: toastId });
    }

    console.log(consultantData);
  };
  return (
    <Row>
      <Col span={24}>
        <LBForm onSubmit={onSubmit}>
          <Divider>Personal Info</Divider>
          <Row gutter={8}>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <LBInput
                type="text"
                name="name.firstName"
                label="First Name"
              ></LBInput>
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <LBInput
                type="text"
                name="name.middleName"
                label="Middle Name"
              ></LBInput>
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <LBInput
                type="text"
                name="name.lastName"
                label="Last Name"
              ></LBInput>
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <LBSelect
                label="Blood Group"
                name="bloodGroup"
                options={bloodGroupsOptions}
              />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <LBDatePicker name="dateOfBirth" label="Date of Birth" />
            </Col>

            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <LBSelect label="Gender" name="gender" options={gendersOptions} />
            </Col>
          </Row>

          <Divider>Contact Info</Divider>
          <Row gutter={8}>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <LBInput type="text" name="email" label="Email"></LBInput>
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <LBInput
                type="text"
                name="contactNo"
                label="Contact No"
              ></LBInput>
            </Col>

            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <LBInput
                type="text"
                name="emergencyContactNo"
                label="Emergency ContactNo"
              ></LBInput>
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <LBInput
                type="text"
                name="presentAddress"
                label="Present Address"
              ></LBInput>
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <LBInput
                type="text"
                name="permanentAddress"
                label="Permanent Address"
              ></LBInput>
            </Col>
          </Row>

          <Button htmlType="submit">Submit</Button>
        </LBForm>
      </Col>
    </Row>
  );
};

export default CreateConsultant;
