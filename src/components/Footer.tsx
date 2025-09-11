import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footerContainer}>
        <img className={styles.footerIcon} src="./github-icon.png" alt="Icon" />
      </div>
    </div>
  );
};

export default Footer;
