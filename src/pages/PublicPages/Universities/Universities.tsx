// import img from "../../../assets/images/d-panyukov-_4ZLmHzwARY-unsplash.jpg";
import { useGetAllUniversitiesQuery } from "../../../redux/features/admin/universityManagement.api";
import CardSection from "../../../components/ui/PublicLayoutComponents/CardSection";
import HeaderSection from "../../../components/ui/PublicLayoutComponents/HeaderSection";
import SectionTitle from "../../../components/ui/PublicLayoutComponents/SectionTitle";
import { BankOutlined } from "@ant-design/icons";

const Universities = () => {
  const { data: universities } = useGetAllUniversitiesQuery(undefined);
  const img =
    "https://i.ibb.co.com/gFXD3f67/pexels-philevenphotos-27772402.jpg";
  const cards = universities?.data
    ?.filter((university) => !university.isDeleted)
    .map((university) => ({
      key: university._id,
      title: university.name,
      description: university?.name,
      icon: <BankOutlined />,
      id: university._id,
      onClick: () => {
        if (university.website) {
          window.open(university.website, "_blank"); // ✅ opens in new tab
        } else {
          console.warn("No website found for this university.");
        }
      },
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
