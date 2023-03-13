import styles from "@/styles/button.module.css";
import Link from "next/link";
import Image from "next/image";
const HomeButton = () => {
  return (
    <Link className={styles.main} href="./">
      <Image
        src="/images/arrow.png"
        width="30"
        height="30"
        alt="Arrow Icon"
      ></Image>
    </Link>
  );
};

export default HomeButton;
