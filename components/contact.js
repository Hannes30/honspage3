import styles from "@/styles/contact.module.css";
import Link from "next/link";
import Image from "next/image";

const Contact = ({ project }) => {
  return (
    <div className={styles.main}>
      <div className={styles.email}>
        <Image
          src="/images/icons/email.png"
          width="50"
          height="50"
          alt="email Icon"
        ></Image>
        <Link
          href="mailto:hannes.scheibelauer@outlook.com"
          className={styles.link}
        >
          hannes.scheibelauer@outlook.com
        </Link>
      </div>
    </div>
  );
};

export default Contact;
