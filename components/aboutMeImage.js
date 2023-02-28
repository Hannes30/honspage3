import styles from "@/styles/AboutMeImage.module.css";
import Image from "next/image";

const AboutMeImage = () => {
  return (
    <>
      <div className={styles.main}>
        <Image
          src="/images/about-image-Hannes.png"
          width="430"
          height="400"
          className={styles.image}
        ></Image>
        <div className={styles.imageBackground}></div>
      </div>
    </>
  );
};

export default AboutMeImage;
