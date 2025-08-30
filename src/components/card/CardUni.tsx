// src/components/InfoCard.tsx
import React from "react";
import { Card, List, Typography, Button } from "antd";

const { Title, Paragraph } = Typography;

type InfoCardProps = {
  image?: string;
  title: string;
  description?: string;
  items?: string[];
  buttonLabel?: string; // <-- dynamic text for button
  onButtonClick?: () => void; // <-- click handler
};

const CardUni: React.FC<InfoCardProps> = ({
  image,
  title,
  description,
  buttonLabel,
  onButtonClick,
}) => {
  return (
    <Card
      hoverable
      cover={
        <img
          alt={title}
          src={image}
          style={{
            height: 180,
            objectFit: "cover",
            border: "1px solid #eee",
            borderRadius: "8px",
          }}
        />
      }
      style={{ borderRadius: 8 }}
    >
      <Title level={4}>{title}</Title>
      {description && <Paragraph>{description}</Paragraph>}
      {buttonLabel && (
        <Button type="primary" block onClick={onButtonClick}>
          {buttonLabel}
        </Button>
      )}
    </Card>
  );
};

export default CardUni;
