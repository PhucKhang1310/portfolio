import Title from "antd/es/typography/Title";
import ProjectCarousel from "./ProjectCarousel";
import styles from "../styles/MyProjects.module.css";

const MyProjects = () => {
  return (
    <div className={styles.projectsContainer}>
      <Title className={styles.projectsTitle} level={4}>
        Things I've worked on
      </Title>
      <ProjectCarousel />
    </div>
  );
};

export default MyProjects;
