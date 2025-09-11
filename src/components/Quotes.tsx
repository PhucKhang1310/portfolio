import { List } from "antd";
import Title from "antd/es/typography/Title";
import Text from "antd/es/typography/Text";
import styles from "../styles/Quotes.module.css";

const Quotes = () => {
  return (
    <div className={styles.quotes}>
      <div className={styles.quotesContainer}>
        <div className={styles.bioQuotes}>
          <div className={styles.titleContainer}>
            <Title level={4}>Quotes I found</Title>
          </div>
          <div className={styles.colorBar} />
          <div className={styles.quoteList}>
            <List>
              <List.Item>
                <Text>
                  "You either ball, or screw around long enough to find out" -
                  Khang Nguyen
                </Text>
              </List.Item>
              <List.Item>
                <Text>
                  "People keep believing quotes they don't know on the internet"
                  - Khang Nguyen
                </Text>
              </List.Item>
            </List>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quotes;
