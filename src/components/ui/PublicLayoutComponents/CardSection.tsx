import React from "react";
import { Row, Col, Card, Typography, Button } from "antd";

const { Title, Paragraph } = Typography;

type CardItem = {
  title: string;
  description?: string;
  image?: string;
};

type CardSectionProps = {
  cards: CardItem[];
  variant?: "home" | "default";
};

const CardSection: React.FC<CardSectionProps> = ({
  cards,
  variant = "default",
}) => {
  return (
    <div style={{ padding: "40px 20px", maxWidth: "1200px", margin: "0 auto" }}>
      <Row gutter={[24, 24]}>
        {cards.map((card, index) => (
          <Col key={index} xs={24} sm={24} md={8}>
            <Card
              hoverable
              cover={
                variant === "default" && card.image ? (
                  <img
                    alt={card.title}
                    src={card.image}
                    style={{ height: "150px", objectFit: "cover" }}
                  />
                ) : null
              }
              style={{
                borderRadius: "12px",
                overflow: "hidden",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "center",
                textAlign: "center",
                padding: "20px",
              }}
            >
              <div style={{ justifyItems: "center", textAlign: "center" }}>
                <Title level={2}>Study in {card.title}</Title>
                <Paragraph style={{ fontSize: "clamp(14px, 2vw, 18px)" }}>
                  {card.description}
                </Paragraph>
              </div>

              {variant === "home" && (
                <Button
                  type="primary"
                  block
                  style={{
                    margin: "16px 5px",
                    padding: "10px 10px",
                    fontSize: "16px",
                  }}
                >
                  Learn More
                </Button>
              )}
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default CardSection;
