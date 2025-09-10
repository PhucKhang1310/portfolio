import { Card, Col, ConfigProvider, Row } from "antd";
import Meta from "antd/es/card/Meta";
import "../styles/ProjectCard.css";

interface Props {
  cardInfo: { title: string; content: string }[];
  rowSize?: number;
}

const Projects = ({ cardInfo, rowSize = 3 }: Props) => {
  return (
    <ConfigProvider
      theme={{
        components: {
          Card: {
            colorBgContainer: "rgba(58, 58, 58, 1)",
            colorBorderSecondary: "transparent",
            colorTextHeading: "white",
            colorTextDescription: "white",

          },
        },
      }}
    >
      <Row gutter={16} align="middle" justify="center" style={{ padding: 40}}>
        {cardInfo.map((info, index) => (
          <Col
            key={index}
            span={24 / rowSize}
          >
            <Card hoverable={true} title={info.title} cover={<img className="cover-photo" src="./cover.jpg" />}>
              <Meta title={info.title} description={info.content} />
            </Card>
          </Col>
        ))}
      </Row>
    </ConfigProvider>
  );
};

export default Projects;
