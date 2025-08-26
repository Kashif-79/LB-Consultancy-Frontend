import PageLayout from "../../layout/PageLayout";
import img from "../../../assets/images/d-panyukov-_4ZLmHzwARY-unsplash.jpg";
import { useGetAllUniversitiesQuery } from "../../../redux/features/admin/CountryManagement.api";
import CardUni from "../../card/CardUni";

const Universities = () => {
  const { data: universities } = useGetAllUniversitiesQuery(undefined);
  return (
    <div>
      <PageLayout title="Universities" backgroundImage={img}>
        {universities?.data?.map((university) => (
          <CardUni
            key={university._id}
            image={university.name}
            title={university.name}
          />
        ))}
      </PageLayout>
    </div>
  );
};

export default Universities;
