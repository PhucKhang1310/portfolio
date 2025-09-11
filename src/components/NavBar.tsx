import type { TabsProps } from "antd";
import { Button, Drawer, Tabs } from "antd";
import PlanetCanvas from "./PlanetCanvas";
import ScrollProgressBar from "./ScrollProgressBar";
import styles from "../styles/NavBar.module.css";
import { useState } from "react";
import { MenuOutlined } from "@ant-design/icons";
const tabs: TabsProps["items"] = [
  { key: "Home", label: "Home" },
  { key: "Contact", label: "Contact" },
];

interface NavBarProps {
  onChange: (key: string) => void;
}

const NavBar = ({ onChange }: NavBarProps) => {
  const [drawerVisible, setDrawerVisible] = useState(false);

  const openDrawer = () => {
    setDrawerVisible(true);
    console.log("Drawer opened");
  };

  const closeDrawer = () => {
    setDrawerVisible(false);
    console.log("Drawer closed");
  };

  return (
    <div className={styles.navbar}>
      <div className={styles.navbarContainer}>
        <div className={styles.planetContainer}>
          <PlanetCanvas size={3.5} rotateSpeed={10} />
        </div>
        <div className={styles.navbarLinks}>
          <div>
            <Tabs
              defaultActiveKey="Home"
              items={tabs}
              indicator={{ size: 0 }}
              size="large"
              onChange={onChange}
            />
          </div>
        </div>
        <div className={styles.mobileMenu}>
            <Button onClick={openDrawer} type="text">
              <MenuOutlined style={{ color: "white" }} />
            </Button>
            <Drawer
              placement="top"
              closable={false}
              onClose={closeDrawer}
              open={drawerVisible}
              key="top"
              destroyOnHidden={true}
              height={200}
            >
              <Tabs
                defaultActiveKey="Home"
                items={tabs}
                indicator={{ size: 0 }}
                size="large"
                onChange={onChange}
                tabPosition="right"
              />
            </Drawer>
          </div>
      </div>
      <div className={styles.scrollBar}>
        <ScrollProgressBar />
      </div>
    </div>
  );
};

export default NavBar;
