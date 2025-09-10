import Title from "antd/es/typography/Title";
import ProjectCarousel from "./ProjectCarousel";
import "../styles/MyProjects.css";
import { ConfigProvider } from "antd";

const MyProjects = () => {
  return (
    <div className="projects-container">
      <ConfigProvider theme={{
        components: {
            Typography: {
                colorTextHeading: "white",
            }
        }
      }}>
          <Title className="projects-title" level={4}>
            Things I have worked on
          </Title>
          <ProjectCarousel />
      </ConfigProvider>
    </div>
  );
};

export default MyProjects;
