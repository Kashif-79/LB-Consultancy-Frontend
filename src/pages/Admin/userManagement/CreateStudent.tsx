import {
  //   Controller,
  type FieldValues,
  type SubmitHandler,
} from "react-hook-form";
import { Button, Col, Divider, Row } from "antd";
import { bloodGroupsOptions, gendersOptions } from "../../../types";
import LBInput from "../../../components/form/LBInput";
import LBSelect from "../../../components/form/LBSelect";
import LBDatePicker from "../../../components/form/LBDatePicker";
import LBForm from "../../../components/form/LBForm";
import { useAddStudentMutation } from "../../../redux/features/admin/userManagement.api";

const studentDefaultValue = {
  name: {
    firstName: "Kashif",
    middleName: "Hasan",
    lastName: "Riyad",
  },
  gender: "male",
  bloodGroup: "A+",

  email: "kashif.riyad@example.com",
  contactNo: "01712345678",
  emergencyContactNo: "01987654321",
  presentAddress: "House #12, Road #3, Dhanmondi, Dhaka",
  permanentAddress:
    "Village: Ramchandrapur, Post: Shibpur, District: Narsingdi",

  guardian: {
    fatherName: "Md. Rafiqul Islam",
    fatherOccupation: "Teacher",
    fatherContactNo: "01711112222",
    motherName: "Mst. Salma Begum",
    motherOccupation: "Housewife",
    motherContactNo: "01888883333",
  },

  localGaurdian: {
    name: "Mamun Hossain",
    occupation: "Software Engineer",
    contactNo: "01612345678",
    address: "Mirpur DOHS, Dhaka",
  },

  // admissionSemester: "60f7c5ecf9afc4567890abc1",
  // academicDepartment: "60f7c5ecf9afc4567890abc2",
};

const CreateStudent = () => {
  const [addStudent] = useAddStudentMutation();

  //   console.log({ data, error });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    const studentData = {
      password: "student123",
      student: data,
    };
    // const formData = new FormData();
    // formData.append("data", JSON.stringify(studentData));
    // formData.append("file", data.profileImg);

    addStudent(studentData);

    console.log(studentData);
  };
  return (
    <Row>
      <Col span={24}>
        <LBForm onSubmit={onSubmit} defaultValues={studentDefaultValue}>
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
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              {/* <Controller
                name="profileImg"
                render={({ field: { onChange, value, ...field } }) => (
                  <Form.Item label="Picture">
                    <Input
                      type="file"
                      value={value?.fileName}
                      {...field}
                      onChange={(e) => onChange(e.target.files?.[0])}
                    />
                  </Form.Item>
                )}
              /> */}
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
                name="localGaurdian.name"
                label="Local Guardain Name"
              ></LBInput>
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <LBInput
                type="text"
                name="localGaurdian.occupation"
                label="Occupation"
              ></LBInput>
            </Col>

            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <LBInput
                type="text"
                name="localGaurdian.contactNo"
                label="Contact No"
              ></LBInput>
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <LBInput
                type="text"
                name="localGaurdian.address"
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

export default CreateStudent;
