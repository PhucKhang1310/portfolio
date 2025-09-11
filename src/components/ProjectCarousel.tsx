import { Carousel } from "antd";
import ProjectCards from "./ProjectCards";
import styles from "../styles/ProjectCarousel.module.css";

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
    <div className={styles.container}>
      <Carousel autoplay={true} arrows={true} className={styles.carousel}>
        <div>
          <ProjectCards cardInfo={projectInfo} />
        </div>
        <div>
          <ProjectCards cardInfo={otherInfo} />
        </div>
      </Carousel>
    </div>
  );
};

export default ProjectCarousel;
