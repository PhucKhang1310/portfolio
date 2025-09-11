import type { TabsProps } from "antd";
import { Tabs } from "antd";
import PlanetCanvas from "./PlanetCanvas";
import ScrollProgressBar from "./ScrollProgressBar";
import styles from "../styles/NavBar.module.css";

const tabs: TabsProps["items"] = [
  { key: "Home", label: "Home" },
  { key: "Contact", label: "Contact" },
];

interface NavBarProps {
  onChange: (key: string) => void;
}

const NavBar = ({ onChange }: NavBarProps) => {
  return (
    <div className={styles.navbar}>
      
        <div className={styles.navbarContainer}>
          <div className={styles.planetContainer}>
            <PlanetCanvas size={3.5} rotateSpeed={10}/>
          </div>
          <div className={styles.navbarLinks}>
            <Tabs
              defaultActiveKey="Home"
              items={tabs}
              indicator={{ size: 0 }}
              size="large"
              onChange={onChange}
            />
          </div>
        </div>
        <div className={styles.scrollBar}>
          <ScrollProgressBar />
        </div>
    </div>
  );
};

export default NavBar;
