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
import { useAddAdminMutation } from "../../../redux/features/admin/userManagement.api";

const AdminDefaultValue = {
  name: {
    firstName: "Kashif",
    middleName: "Ahmed",
    lastName: "Hossain",
  },
  gender: "male",
  email: "kashif@example.com",
  contactNo: "+8801712345678",
  emergencyContactNo: "+8801987654321",
  bloodGroup: "B+",
  presentAddress: "123 Green Road, Dhaka, Bangladesh",
  permanentAddress: "Village Road, Cumilla, Bangladesh",
  isDeleted: false,
};

const CreateAdmin = () => {
  const [addAdmin] = useAddAdminMutation();
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    const adminData = {
      password: "A111",
      admin: data,
    };
    //     //     // const formData = new FormData();
    //     //     // formData.append("data", JSON.stringify(studentData));
    //     //     // formData.append("file", data.profileImg);

    addAdmin(adminData);

    console.log(adminData);
  };
  return (
    <Row>
      <Col span={24}>
        <LBForm onSubmit={onSubmit} defaultValues={AdminDefaultValue}>
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

          <Button htmlType="submit">Submit</Button>
        </LBForm>
      </Col>
    </Row>
  );
};

export default CreateAdmin;
