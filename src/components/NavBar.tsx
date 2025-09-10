import type { TabsProps } from "antd";
import { ConfigProvider, Divider, Tabs } from "antd";
import "../styles/NavBar.css";
import PlanetCanvas from "./PlanetCanvas";
import ScrollProgressBar from "./ScrollProgressBar";

const tabs: TabsProps["items"] = [
  { key: "Home", label: "Home" },
  { key: "Contact", label: "Contact" },
];

interface NavBarProps {
  onChange: (key: string) => void;
}

const NavBar = ({ onChange }: NavBarProps) => {
  return (
    <div className="navbar">
      <ConfigProvider
        theme={{
          components: {
            Tabs: {
              cardBg: "transparent",
              itemColor: "white",
              inkBarColor: "transparent",
              itemSelectedColor: "rgba(0, 174, 197, 0.43)",
              itemHoverColor: "rgba(0, 174, 197, 0.43)",
              itemActiveColor: "rgba(0, 174, 197, 0.43)",
            },
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
              onChange={onChange}
            />
          </div>
        </div>
        <div className="scroll-bar">
          <ScrollProgressBar />
        </div>
      </ConfigProvider>
    </div>
  );
};

export default NavBar;
