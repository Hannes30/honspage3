import styles from "@/styles/projects.module.css";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Project = (props) => {
  function setActive() {
    props.cb(props.value);
  }
  return (
    <div
      onClick={setActive}
      className={
        styles.mainCard +
        " " +
        (props.active ? styles.active : styles.inactive) +
        " " +
        (props.active ? `${styles.active}${props.value} ` : "")
      }
    >
      <Image
        src={props.img}
        width="400"
        height="200"
        className={styles.cardImage}
        alt={props.name}
      ></Image>
      <br />
      <div className={styles.title}>{props.name}</div>
      <div className={styles.textArea}>
        <div className={styles.text}>{props.children}</div>
        <Link href={"./" + props.name} className={styles.button}>
          Mehr
        </Link>
      </div>
    </div>
  );
};

export default Project;
