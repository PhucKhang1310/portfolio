import type { TabsProps } from "antd";
import { ConfigProvider, Divider, Tabs } from "antd";
import "../styles/NavBar.css";
import PlanetCanvas from "./PlanetCanvas";

const tabs: TabsProps["items"] = [
  { key: "Home", label: "Home" },
  { key: "Contact", label: "Contact" },
];

const NavBar = () => {
  return (
    <div className="navbar">
      <ConfigProvider
        theme={{
          components: {
            Tabs: {
              cardBg: "transparent",
              itemColor: "white",
              inkBarColor: "transparent",
              itemSelectedColor: "teal",
              itemHoverColor: "teal",
            },
            Divider:{
              marginLG: 10,
            }
          },
        }}
      >
        <div className="navbar-container">
          <div>
            <PlanetCanvas size={1} />
          </div>
          <div></div>
          <div className="navbar-links">
            <Tabs
              defaultActiveKey="Home"
              items={tabs}
              indicator={{ size: 0 }}
              size="large"
            />
          </div>
        </div>
        <Divider size="large" style={{ borderColor: "rgba(152, 182, 228, 1)" }} />
      </ConfigProvider>
    </div>
  );
};

export default NavBar;
