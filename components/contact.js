import styles from "@/styles/contact.module.css";
import Link from "next/link";
import Image from "next/image";

const Contact = () => {
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
          href="mailto:kontakt@hannes-scheibelauer.at"
          className={styles.link}
        >
          kontakt@hannes-scheibelauer.at
        </Link>
      </div>
    </div>
  );
};

export default Contact;
