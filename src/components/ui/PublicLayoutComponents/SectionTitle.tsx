// src/components/SectionTitle.tsx
import React from "react";
import { Typography } from "antd";

const { Title, Paragraph } = Typography;

type SectionTitleProps = {
  title: string;
  description?: string;
};

const SectionTitle: React.FC<SectionTitleProps> = ({ title, description }) => {
  return (
    <div
      style={{
        textAlign: "center",
        maxWidth: "600px",
        margin: "15px auto 0 auto",
        padding: "20px 20px",
      }}
    >
      <Title
        level={2}
        style={{
          fontSize: "clamp(20px, 4vw, 36px)",
          fontWeight: "bold",
          marginBottom: "10px",
        }}
      >
        {title}
      </Title>
      {description && (
        <Paragraph
          style={{
            fontSize: "clamp(14px, 2vw, 18px)",
            color: "rgba(0,0,0,0.65)",
            margin: 0,
          }}
        >
          {description}
        </Paragraph>
      )}
    </div>
  );
};

export default SectionTitle;
