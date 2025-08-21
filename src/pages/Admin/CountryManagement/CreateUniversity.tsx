import { Button, Col, Flex } from "antd";
import type { FieldValues, SubmitHandler } from "react-hook-form";
import LBForm from "../../../components/form/LBForm";
import LBInput from "../../../components/form/LBInput";
import {
  useAddUniversityMutation,
  useGetAllCountriesQuery,
} from "../../../redux/features/admin/CountryManagement.api";
import LBSelect from "../../../components/form/LBSelect";
import { programmesOptions } from "../../../constants/university";
import { toast } from "sonner";
import type { TResponse, TUniversity } from "../../../types";

const dummyUniversityData = {
  name: "University of Dhaka",
  website: "https://www.du.ac.bd",
  ranking: 601,
  tuitionFees: 1500,
};

const CreateUniversity = () => {
  const { data: countryData } = useGetAllCountriesQuery(undefined);
  const [addUniversity] = useAddUniversityMutation();
  const countryOptions = countryData?.data?.map((item) => ({
    value: item._id,
    label: item.name,
  }));
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const toastId = toast.loading("Creating...");
    const universityData = {
      ...data,
      ranking: Number(data.ranking),
      tuitionFees: Number(data.tuitionFees),
    };
    try {
      const res = (await addUniversity(
        universityData
      )) as TResponse<TUniversity>;
      console.log(res);
      if (res.error) {
        toast.error(res.error.data.message, { id: toastId });
      } else {
        toast.success("University created", { id: toastId });
      }
    } catch (err) {
      toast.error("Something went wrong", { id: toastId });
    }
    console.log(universityData);
  };

  return (
    <Flex justify="center" align="center">
      <Col span={6}>
        <LBForm onSubmit={onSubmit} defaultValues={dummyUniversityData}>
          <LBInput label="Name" type="text" name="name" />
          <LBSelect label="Country" name="country" options={countryOptions} />
          <LBInput label="Website" type="text" name="website" />
          <LBInput label="ranking" type="text" name="ranking" />
          <LBInput label="tuitionFees" type="text" name="tuitionFees" />
          <LBSelect
            mode="multiple"
            label="Programmes"
            name="programs"
            options={programmesOptions}
          />

          <Button htmlType="submit">Submit</Button>
        </LBForm>
      </Col>
    </Flex>
  );
};

export default CreateUniversity;
