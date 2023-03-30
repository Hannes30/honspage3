import styles from "@/styles/top.module.css";
import HeadingText from "@/components/headingText";
import Flyins from "./flyins";
import ImageOverlay from "./imageOverlay";
import Image from "next/image";
import { use, useEffect, useState } from "react";
const Top = () => {
  const [imageVisible, setImageVisible] = useState(true);

  useEffect(
    () =>
      window.addEventListener("scroll", () => {
        if (window.pageYOffset > 50) {
          imageVisible ? setImageVisible(false) : "";
        }
      }),
    []
  );

  return (
    <div className={styles.main}>
      <div className={styles.left}>
        <HeadingText />
      </div>
      <div className={styles.right}>
        <Flyins />
        <ImageOverlay />
      </div>
      <Image
        className={styles.arrow + " " + (!imageVisible ? styles.hidden : "")}
        src="/images/arrow.png"
        width="100"
        height="100"
        alt="arrrow"
      ></Image>
    </div>
  );
};

export default Top;
