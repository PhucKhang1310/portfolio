import { ConfigProvider, List } from "antd";
import Title from "antd/es/typography/Title";
import Text from "antd/es/typography/Text";
import "../styles/Quotes.css";


const Quotes = () => {
  return (
    <div className="quotes">
        <div className="quotes-container">
            <div className="bio-quotes">
              <ConfigProvider
                theme={{
                  components: {
                    Typography: {
                      colorText: "white",
                      colorTextHeading: "white",
                      fontFamily: "Segoe UI, Tahoma, Geneva, Verdana, sans-serif",
                      fontSize: 18,
                      fontSizeHeading1: 45,
                    },
                    List: {
                      colorSplit: "white",
                    },
                  },
                }}
              >
                  <Title level={4}>Quotes I found</Title>
                  <div className="color-bar" />
                  {/* <Divider type="vertical" style={{backgroundColor:"lightblue"}} /> */}
                  <List
                  // bordered={true}
                  >
                    <List.Item>
                      <Text>
                        "You either ball, or screw around long enough to find out" - Khang
                        Nguyen
                      </Text>
                    </List.Item>
                    <List.Item>
                      <Text>
                        "People keep believing quotes they don't know on the internet" -
                        Khang Nguyen
                      </Text>
                    </List.Item>
                  </List>
              </ConfigProvider>
            </div>
        </div>
    </div>
  );
};

export default Quotes;
