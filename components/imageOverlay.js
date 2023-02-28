import styles from "@/styles/overlayImage.module.css";
import Image from "next/image";
import Link from "next/link";

const ImageOverlay = () => {
  return (
    <>
      <Link href={"./"}>
        <div className={styles.image}></div>
      </Link>
    </>
  );
};

export default ImageOverlay;
