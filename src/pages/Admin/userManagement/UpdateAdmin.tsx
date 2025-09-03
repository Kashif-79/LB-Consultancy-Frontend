import { useNavigate, useParams } from "react-router-dom";
import {
  useGetSingleAdminQuery,
  useUpdateAdminsMutation,
} from "../../../redux/features/admin/userManagement.api";
import type { FieldValues, SubmitHandler } from "react-hook-form";
import { Button, Col, Divider, Row } from "antd";
import { bloodGroupsOptions, gendersOptions } from "../../../types";
import LBInput from "../../../components/form/LBInput";
import LBSelect from "../../../components/form/LBSelect";
import LBDatePicker from "../../../components/form/LBDatePicker";
import LBForm from "../../../components/form/LBForm";
import { toast } from "sonner";

const UpdateAdmin = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: admin, refetch } = useGetSingleAdminQuery(id);
  const [updateAdmin] = useUpdateAdminsMutation();

  const adminData = {
    name: admin?.data?.name,
    gender: admin?.data?.gender,
    bloodGroup: admin?.data?.bloodGroup,
    email: admin?.data?.email,
    contactNo: admin?.data?.contactNo,
    emergencyContactNo: admin?.data?.emergencyContactNo,
    presentAddress: admin?.data?.presentAddress,
    permanentAddress: admin?.data?.permanentAddress,
  };

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const updateData = {
      id,
      data: {
        admin: data,
      },
    };
    const toastId = toast.loading("Updating...");
    try {
      await updateAdmin(updateData);
      refetch();
      navigate(-1);
      toast.success("Admin updated successfully", { id: toastId });
    } catch (err: any) {
      toast.error(err?.data?.message ?? "Update failed", { id: toastId });
    }
    console.log("updateData", updateData);
  };

  return (
    <Row>
      <Col span={24}>
        <LBForm onSubmit={onSubmit} defaultValues={adminData}>
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

export default UpdateAdmin;
