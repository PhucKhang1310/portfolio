import Title from "antd/es/typography/Title";
import PlanTable from "./PlanTable";
import styles from "../styles/MyPlans.module.css";

const MyPlans = () => {
  return (
    <div className={styles.plansContainer}>
      <Title className={styles.plansTitle} level={4}>
        Things I'm up to
      </Title>
      <div className={styles.tableContainer}>
        <PlanTable />
      </div>
    </div>
  );
};

export default MyPlans;
