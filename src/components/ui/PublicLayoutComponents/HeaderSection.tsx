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
        height: "90vh",
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "0 20px",
        color: "#fff",
        position: "relative",
      }}
    >
      <div
        style={{
          alignContent: "center",
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(0,0,0,0.3)",
        }}
      >
        <Title
          level={1}
          style={{
            boxShadow: "0 2px 10px rgba(248, 224, 224, 0.5)",
            color: "white",
            fontWeight: "bold",
            zIndex: 1,
            fontSize: "clamp(24px, 5vw, 48px)",
            textShadow: "2px 2px 6px rgba(0, 0, 0, 0.38)",
            margin: 0,
          }}
        >
          {title}
        </Title>
      </div>
    </div>
  );
};

export default HeaderSection;
