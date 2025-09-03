import { useNavigate, useParams } from "react-router-dom";
import {
  useGetSingleStudentQuery,
  useUpdateStudentMutation,
} from "../../../redux/features/admin/userManagement.api";
import LBInput from "../../../components/form/LBInput";
import LBSelect from "../../../components/form/LBSelect";
import LBDatePicker from "../../../components/form/LBDatePicker";
import LBForm from "../../../components/form/LBForm";
import { Button, Col, Divider, Row } from "antd";
import type { FieldValues, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";
import { bloodGroupsOptions, gendersOptions } from "../../../types";

const UpdateStudent = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: student, refetch } = useGetSingleStudentQuery(id);
  const [updateStudent] = useUpdateStudentMutation();

  const studentData = {
    name: student?.data?.name,
    gender: student?.data?.gender,
    bloodGroup: student?.data?.bloodGroup,
    email: student?.data?.email,
    contactNo: student?.data?.contactNo,
    emergencyContactNo: student?.data?.emergencyContactNo,
    presentAddress: student?.data?.presentAddress,
    permanentAddress: student?.data?.permanentAddress,
    profileImg: student?.data?.profileImg,
    guardian: student?.data?.guardian,
    localGuardian: student?.data?.localGuardian,
  };

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const updateData = {
      id,
      data: {
        student: data,
      },
    };
    const toastId = toast.loading("Updating...");
    try {
      await updateStudent(updateData);
      refetch();
      navigate(-1);
      toast.success("Student updated successfully", { id: toastId });
    } catch (err: any) {
      toast.error(err?.data?.message ?? "Update failed", { id: toastId });
    }
    console.log("updateData", updateData);
  };

  return (
    <Row>
      <Col span={24}>
        <LBForm onSubmit={onSubmit} defaultValues={studentData}>
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

          <Divider>Guardian</Divider>
          <Row gutter={8}>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <LBInput
                type="text"
                name="guardian.fatherName"
                label="FatherName"
              ></LBInput>
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <LBInput
                type="text"
                name="guardian.fatherOccupation"
                label="Father Occupation"
              ></LBInput>
            </Col>

            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <LBInput
                type="text"
                name="guardian.fatherContactNo"
                label="Father Contact No"
              ></LBInput>
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <LBInput
                type="text"
                name="guardian.motherName"
                label="Mother Name"
              ></LBInput>
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <LBInput
                type="text"
                name="guardian.motherOccupation"
                label="Mother Occupation"
              ></LBInput>
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <LBInput
                type="text"
                name="guardian.motherContactNo"
                label="Mother Contact No"
              ></LBInput>
            </Col>
          </Row>

          <Divider>Local guardian</Divider>
          <Row gutter={8}>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <LBInput
                type="text"
                name="localGuardian.name"
                label="Local Guardain Name"
              ></LBInput>
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <LBInput
                type="text"
                name="localGuardian.occupation"
                label="Occupation"
              ></LBInput>
            </Col>

            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <LBInput
                type="text"
                name="localGuardian.contactNo"
                label="Contact No"
              ></LBInput>
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <LBInput
                type="text"
                name="localGuardian.address"
                label="address"
              ></LBInput>
            </Col>
          </Row>

          <Button htmlType="submit">Submit</Button>
        </LBForm>
      </Col>
    </Row>
  );
};

export default UpdateStudent;
