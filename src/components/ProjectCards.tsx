import { Card, Col, Row } from "antd";
import Meta from "antd/es/card/Meta";
import styles from "../styles/ProjectCards.module.css";

interface Props {
  cardInfo: { title: string; content: string }[];
  rowSize?: number;
}

const Projects = ({ cardInfo, rowSize = 3 }: Props) => {
  return (
    <div className={styles.container}>
      <Row
        className={styles.container}
        gutter={16}
        align="middle"
        justify="center"
      >
        {cardInfo.map((info, index) => (
          <Col key={index} span={24 / rowSize}>
            <Card
              className={styles.card}
              hoverable={true}
              title={info.title}
              cover={<img className={styles.coverPhoto} src="./cover.jpg" />}
            >
              <Meta title={info.title} description={info.content} />
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Projects;
