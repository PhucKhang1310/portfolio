import { ConfigProvider, Typography } from "antd";
import "../styles/Biography.css";
import Title from "antd/es/typography/Title";
import Paragraph from "antd/es/typography/Paragraph";
import Text from "antd/es/typography/Text";
const Biography = () => {
  return (
    <div className="biography">
      <ConfigProvider
        theme={{
          components: {
            Typography: {
              colorText: "white",
              colorTextHeading: "white",
              fontFamily: "Segoe UI, Tahoma, Geneva, Verdana, sans-serif",
              fontSize: 18,
              fontSizeHeading1: 45,
            },
          },
        }}
      >
        <Typography>
          <div className="bio-container">
            <div className="bio-grid">
              <div className="bio-left">
                <div className="bio-title">
                  <Title level={1}>Khang Phuc Nguyen</Title>
                </div>
                <div className="bio-subtitle">
                  <Text>FPT University, HCM Campus</Text>
                </div>
              </div>
            </div>
            <div className="bio-grid">
              <div className="bio-left">
                <div className="bio-text">
                  <Paragraph>
                    Hello! I'm Khang, a passionate software developer with a
                    knack for creating innovative solutions. I specialize in
                    full-stack development, and I'm always eager to learn new
                    technologies and improve my skills.
                    <br />
                    When I'm not coding, you can find me exploring the latest
                    tech trends or working on personal projects. Let's connect
                    and build something amazing together!
                  </Paragraph>
                </div>
              </div>
              <div className="bio-right">
                <div className="bio-image">
                  <img
                    className="bio-img"
                    src="./man.jpg"
                    alt="Khang Phuc Nguyen"
                  />
                  <div className="bio-img-tagline">
                    <Text>AiTA Lab, Dept. of Computing Fundamentals</Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Typography>
      </ConfigProvider>
    </div>
  );
};

export default Biography;
