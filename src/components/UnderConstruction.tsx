import {
  ToolOutlined,
  WarningOutlined,
  ClockCircleOutlined,
  RocketOutlined,
  CodeOutlined,
} from "@ant-design/icons";
import { Typography, Space, Button } from "antd";

const { Title, Text } = Typography;

const UnderConstruction = () => {
  return (
    <div
      style={{
        backgroundColor: "transparent",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "2rem",
        textAlign: "center",
      }}
    >
      <Space direction="vertical" size="large" align="center">
        {/* Main Icon */}
        <div style={{ position: "relative" }}>
          <ToolOutlined
            style={{
              fontSize: "120px",
              color: "#8c8c8c",
              animation: "rotate 3s linear infinite",
            }}
          />
          <WarningOutlined
            style={{
              fontSize: "40px",
              color: "#faad14",
              position: "absolute",
              top: "-10px",
              right: "-10px",
            }}
          />
        </div>

        {/* Title */}
        <Title level={1} style={{ color: "#595959", margin: 0 }}>
          Under Construction
        </Title>

        {/* Subtitle */}
        <Title
          level={3}
          style={{ color: "#8c8c8c", fontWeight: "normal", margin: 0 }}
        >
          We're working hard to bring you something amazing!
        </Title>

        {/* Description */}
        <Text
          style={{
            color: "#8c8c8c",
            fontSize: "16px",
            maxWidth: "500px",
            lineHeight: "1.6",
          }}
        >
          This page is currently being developed. Check back soon for exciting
          updates and new features that we're building just for you.
        </Text>

        {/* Feature Icons */}
        <Space size="large" style={{ marginTop: "2rem" }}>
          <div style={{ textAlign: "center" }}>
            <CodeOutlined style={{ fontSize: "32px", color: "#1890ff" }} />
            <div style={{ color: "#8c8c8c", marginTop: "8px" }}>Coding</div>
          </div>
          <div style={{ textAlign: "center" }}>
            <RocketOutlined style={{ fontSize: "32px", color: "#52c41a" }} />
            <div style={{ color: "#8c8c8c", marginTop: "8px" }}>Launching</div>
          </div>
          <div style={{ textAlign: "center" }}>
            <ClockCircleOutlined
              style={{ fontSize: "32px", color: "#faad14" }}
            />
            <div style={{ color: "#8c8c8c", marginTop: "8px" }}>
              Coming Soon
            </div>
          </div>
        </Space>

        {/* Back Button */}
        <Button
          type="primary"
          size="large"
          style={{
            marginTop: "2rem",
            backgroundColor: "transparent",
            borderColor: "#595959",
          }}
          onClick={() => window.history.back()}
        >
          Go Back
        </Button>
      </Space>

      {/* CSS Animation */}
      <style>{`
        @keyframes rotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
      `}</style>
    </div>
  );
};

export default UnderConstruction;
