import styles from "@/styles/overlayImage.module.css";
import Image from "next/image";

const ImageOverlay = () => {
  return (
    <>
      <Image
        src="/images/bg1-overlay.png"
        width="1000"
        height="1000"
        className={styles.image}
      ></Image>
    </>
  );
};

export default ImageOverlay;
