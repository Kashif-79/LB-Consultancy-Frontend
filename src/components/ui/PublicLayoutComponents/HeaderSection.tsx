import React from "react";
import { Typography } from "antd";

const { Title } = Typography;

type HeaderSectionProps = {
  title: string;
  backgroundImage: string;
};

const HeaderSection: React.FC<HeaderSectionProps> = ({
  title,
  backgroundImage,
}) => {
  return (
    <div
      style={{
        width: "100%",
        minHeight: "70vh",
        aspectRatio: "16/9",
        backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "scroll",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "0 20px",
        color: "#fff",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Title
        level={1}
        style={{
          color: "white",
          fontWeight: "bold",
          fontSize: "clamp(24px, 5vw, 48px)",
          textShadow: "2px 2px 6px rgba(0, 0, 0, 0.38)",
          margin: 0,
        }}
      >
        {title}
      </Title>
    </div>
  );
};

export default HeaderSection;
