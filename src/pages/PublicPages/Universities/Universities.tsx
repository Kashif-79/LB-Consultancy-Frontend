import img from "../../../assets/images/d-panyukov-_4ZLmHzwARY-unsplash.jpg";
import { useGetAllUniversitiesQuery } from "../../../redux/features/admin/universityManagement.api";
import CardSection from "../../../components/ui/PublicLayoutComponents/CardSection";
import HeaderSection from "../../../components/ui/PublicLayoutComponents/HeaderSection";
import SectionTitle from "../../../components/ui/PublicLayoutComponents/SectionTitle";

const Universities = () => {
  const { data: universities } = useGetAllUniversitiesQuery(undefined);
  const cards = universities?.data?.map((university) => ({
    title: university.name,
    description: university?.name,
    // image: university.name,
  }));
  return (
    <div>
      <HeaderSection
        title="Top Universities List to Study Abroad"
        backgroundImage={img}
      />
      <SectionTitle
        title="Top Universities List to Study Abroad"
        description="Explore the best universities around the world."
      />
      <CardSection cards={cards || []} variant="home" />
    </div>
  );
};

export default Universities;
