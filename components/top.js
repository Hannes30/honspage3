import styles from "@/styles/top.module.css";
import HeadingText from "@/components/headingText";
import Flyins from "./flyins";
import ImageOverlay from "./imageOverlay";
const Top = () => {
  return (
    <div className={styles.main}>
      <div className={styles.left}>
        <HeadingText />
      </div>
      <div className={styles.right}>
        <Flyins />
        <ImageOverlay />
      </div>
    </div>
  );
};

export default Top;
