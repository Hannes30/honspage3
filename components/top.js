import styles from "@/styles/top.module.css";
import HeadingText from "@/components/headingText";
import Flyins from "./flyins";
const Top = () => {
  return (
    <div className={styles.main}>
      <div className={styles.left}>
        <HeadingText />
      </div>
      <div className={styles.right}>
        <Flyins />
      </div>
    </div>
  );
};

export default Top;
