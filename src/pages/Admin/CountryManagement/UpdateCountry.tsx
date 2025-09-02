import { useNavigate, useParams } from "react-router-dom";
import {
  useGetSingleCountryQuery,
  useUpdateCountryMutation,
} from "../../../redux/features/admin/CountryManagement.api";
import type { FieldValues, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";
import { Button, Col, Flex, Row } from "antd";
import LBForm from "../../../components/form/LBForm";
import LBInput from "../../../components/form/LBInput";

const UpdateCountry = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: country, isFetching, refetch } = useGetSingleCountryQuery(id!);
  const [updateCountry] = useUpdateCountryMutation();

  const countryData = {
    name: country?.data.name,
    code: country?.data.code,
    continent: country?.data.continent,
    currency: country?.data.currency,
    language: country?.data.language,
    whyStudy: country?.data.whyStudy,
    requirements: country?.data.requirements,
    expenses: country?.data.expenses,
  };

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const updateData = {
      id,
      data: {
        country: data,
      },
    };
    const toastId = toast.loading("Updating...");
    try {
      await updateCountry(updateData);
      refetch();
      navigate(-1);
      toast.success("Country updated successfully", { id: toastId });
    } catch (err: any) {
      toast.error(err?.data?.message ?? "Update failed", { id: toastId });
    }
    console.log("updateData", updateData);
  };

  if (isFetching || !country) return <div>Loading...</div>;

  return (
    <Flex justify="center" align="center">
      <Col span={24}>
        <LBForm onSubmit={onSubmit} defaultValues={countryData}>
          <Row gutter={8}>
            <Col span={24}>
              <LBInput label="Name" type="text" name="name" />
            </Col>
            <Col span={24}>
              <LBInput label="Code" type="text" name="code" />
            </Col>
            <Col span={24}>
              <LBInput label="Continent" type="text" name="continent" />
            </Col>
            <Col span={24}>
              <LBInput label="Currency" type="text" name="currency" />
            </Col>
            <Col span={24}>
              <LBInput label="Language" type="text" name="language" />
            </Col>
            <Col span={24}>
              <LBInput label="Why Study" type="textarea" name="whyStudy" />
            </Col>
            <Col span={24}>
              <LBInput
                label="Requirements"
                type="textarea"
                name="requirements"
              />
            </Col>
            <Col span={24}>
              <LBInput label="Expenses" type="textarea" name="expenses" />
            </Col>
          </Row>
          <Button htmlType="submit">Submit</Button>
        </LBForm>
      </Col>
    </Flex>
  );
};

export default UpdateCountry;
