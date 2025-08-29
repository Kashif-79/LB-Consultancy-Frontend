import React from "react";
import { Layout, Typography } from "antd";

const { Content, Footer } = Layout;
const { Title, Text } = Typography;

type PageLayoutProps = {
  title: string;
  backgroundImage: string;
  children: React.ReactNode;
  layoutType?: "grid" | "single";
};

const PageLayout: React.FC<PageLayoutProps> = ({
  title,
  backgroundImage,
  children,
  layoutType = "grid",
}) => {
  return (
    <Layout style={{ minHeight: "100vh", background: "#f9f9f9" }}>
      <div
        style={{
          height: "250px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
          color: "white",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundColor: "rgba(0,0,0,0.5)",
          }}
        />
        <Title
          level={1}
          style={{ color: "white", zIndex: 1, fontWeight: "bold" }}
        >
          {title}
        </Title>
      </div>

      <Content
        style={{
          maxWidth: "1200px",
          margin: "40px auto",
          padding: "0 20px",
          ...(layoutType === "grid"
            ? {
                display: "grid",
                gap: "20px",
                gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
              }
            : {
                display: "block",
              }),
        }}
      >
        {children}
      </Content>

      {/* Footer */}
      <Footer
        style={{ background: "#72ade4ff", color: "white", textAlign: "center" }}
      >
        <Title level={4} style={{ color: "white", marginBottom: 8 }}>
          LB Consultancy
        </Title>
        <Text style={{ color: "#ccc" }}>
          © {new Date().getFullYear()} All Rights Reserved.
        </Text>
      </Footer>
    </Layout>
  );
};

export default PageLayout;
