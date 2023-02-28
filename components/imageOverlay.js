import styles from "@/styles/overlayImage.module.css";
import Image from "next/image";
import Link from "next/link";

const ImageOverlay = () => {
  return (
    <>
      <Link href={"./"}>
        <Image
          src="/images/bg1-overlay.png"
          width="1000"
          height="1000"
          className={styles.image}
        ></Image>
      </Link>
    </>
  );
};

export default ImageOverlay;
