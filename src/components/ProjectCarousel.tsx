import { Carousel, ConfigProvider } from "antd";
import ProjectCards from "./ProjectCards";

const projectInfo = [
  { title: "Project 1", content: "My First Project" },
  { title: "Project 2", content: "My Second Project" },
  { title: "Project 3", content: "My Third Project" },
];

const otherInfo = [
  { title: "Other 1", content: "My First Other" },
  { title: "Other 2", content: "My Second Other" },
];

const ProjectCarousel = () => {
  return (
    <div style={{ padding: "10px 30px", backgroundColor:"rgb(44,44,44)" }}>
      <ConfigProvider
        theme={{
          components: {
            Carousel: {
              colorBgContainer: "white",
            },
          },
        }}
      >
        <Carousel autoplay={true} arrows={true} style={{ maxWidth: 800, margin: "0 auto" }}>
          <div>
            <ProjectCards cardInfo={projectInfo} />
          </div>
          <div>
            <ProjectCards cardInfo={otherInfo} />
          </div>
        </Carousel>
      </ConfigProvider>
    </div>
  );
};

export default ProjectCarousel;
