import { useNavigate, useParams } from "react-router-dom";
import {
  useGetSingleConsultantQuery,
  useUpdateConsultantsMutation,
} from "../../../redux/features/admin/userManagement.api";
import type { FieldValues, SubmitHandler } from "react-hook-form";
import { Button, Col, Divider, Row } from "antd";
import { bloodGroupsOptions, gendersOptions } from "../../../types";
import LBInput from "../../../components/form/LBInput";
import LBSelect from "../../../components/form/LBSelect";
import LBDatePicker from "../../../components/form/LBDatePicker";
import LBForm from "../../../components/form/LBForm";
import { toast } from "sonner";

const UpdateConsultant = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: consultant, refetch } = useGetSingleConsultantQuery(id);
  const [updateConsultant] = useUpdateConsultantsMutation();

  const consultantData = {
    name: consultant?.data?.name,
    gender: consultant?.data?.gender,
    bloodGroup: consultant?.data?.bloodGroup,
    email: consultant?.data?.email,
    contactNo: consultant?.data?.contactNo,
    emergencyContactNo: consultant?.data?.emergencyContactNo,
    presentAddress: consultant?.data?.presentAddress,
    permanentAddress: consultant?.data?.permanentAddress,
  };

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const updateData = {
      id,
      data: {
        consultant: data,
      },
    };
    const toastId = toast.loading("Updating...");
    try {
      await updateConsultant(updateData);
      refetch();
      navigate(-1);
      toast.success("Consultant updated successfully", { id: toastId });
    } catch (err: any) {
      toast.error(err?.data?.message ?? "Update failed", { id: toastId });
    }
    console.log("updateData", updateData);
  };

  return (
    <Row>
      <Col span={24}>
        <LBForm onSubmit={onSubmit} defaultValues={consultantData}>
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

export default UpdateConsultant;
