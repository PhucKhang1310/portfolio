import { Typography } from "antd";
import Title from "antd/es/typography/Title";
import Paragraph from "antd/es/typography/Paragraph";
import Text from "antd/es/typography/Text";
import styles from "../styles/Biography.module.css";

const Biography = () => {
  return (
    <div className={styles.biography}>
      <Typography>
        <div className={styles.bioContainer}>
          <div className={styles.bioGrid}>
            <div className={styles.bioLeft}>
              <div className={styles.bioTitle}>
                <Title level={1}>Khang Phuc Nguyen</Title>
              </div>
              <div className={styles.bioSubtitle}>
                <Text>FPT University, HCM Campus</Text>
              </div>
            </div>
          </div>
          <div className={styles.bioGrid}>
            <div className={styles.bioLeft}>
              <div className={styles.bioText}>
                <Paragraph>
                  Hello! I'm Khang, a passionate software developer with a knack
                  for creating innovative solutions. I specialize in fullStack
                  development, and I'm always eager to learn new technologies
                  and improve my skills.
                </Paragraph>
                <Paragraph>
                  When I'm not coding, you can find me exploring the latest tech
                  trends or working on personal projects. Let's connect and
                  build something amazing together!
                </Paragraph>
              </div>
            </div>
            <div className={styles.bioRight}>
              <div className={styles.bioImage}>
                <img
                  className={styles.bioImg}
                  src="./man.jpg"
                  alt="Khang Phuc Nguyen"
                />
                <div className={styles.bioImgTagline}>
                  <Text>Me, Doin' Work</Text>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Typography>
    </div>
  );
};

export default Biography;
