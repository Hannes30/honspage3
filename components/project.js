import styles from "@/styles/projects.module.css";
import { useEffect, useState } from "react";
import Image from "next/image";

const Project = (props) => {
  function setActive() {
    props.cb(props.value);
  }
  return (
    <div
      onClick={setActive}
      className={
        styles.mainCard + " " + (props.active ? styles.active : styles.inactive)
      }
    >
      <Image
        src={props.img}
        width="400"
        height="200"
        className={styles.cardImage}
      ></Image>
      <br />
      <div className={styles.textArea}>
        <div className={styles.title}>{props.name}</div>

        <div className={styles.text}>{props.children}</div>
      </div>
    </div>
  );
};

export default Project;
