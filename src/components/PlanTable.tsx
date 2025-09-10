import {
  FileTextOutlined,
  GlobalOutlined,
  TranslationOutlined,
  CheckOutlined,
  LoadingOutlined,
} from "@ant-design/icons";
import { Table } from "antd";
import Text from "antd/es/typography/Text";

const iconMap = {
  paper: <FileTextOutlined style={{ fontSize: "20px", color: "#1890ff" }} />,
  study: <GlobalOutlined style={{ fontSize: "20px", color: "#52c41a" }} />,
  language: (
    <TranslationOutlined style={{ fontSize: "20px", color: "#faad14" }} />
  ),
};

const columns = [
  {
    title: "Completion",
    dataIndex: "completed",
    align: "center" as const,
    width: "50px",
    render: (completed: boolean) =>
      completed ? (
        <CheckOutlined style={{ fontSize: "20px", color: "lime" }} />
      ) : (
        <LoadingOutlined style={{ fontSize: "20px", color: "orange" }} />
      ),
  },
  {
    title: "Plans",
    dataIndex: "plan",
    align: "left" as const,
    width: "200px",
    render: (text: string) => <Text>{text}</Text>,
  },
  {
    title: "Icon",
    dataIndex: "icon",
    align: "left" as const,
    width: "50px",
    render: (iconKey: string) => iconMap[iconKey as keyof typeof iconMap],
  },
];

const data = [
  {
    key: "plan1",
    plan: "Publish a paper",
    icon: "paper",
    completed: true,
  },
  {
    key: "plan2",
    plan: "Study abroad",
    icon: "study",
    completed: false,
  },
  {
    key: "plan3",
    plan: "Learn German",
    icon: "language",
    completed: false,
  },
];

const PlanTable = () => {
  return (
    <div>
      <Table
        columns={columns}
        dataSource={data}
        showHeader={false}
        bordered={true}
        pagination={false}
      />
    </div>
  );
};

export default PlanTable;
