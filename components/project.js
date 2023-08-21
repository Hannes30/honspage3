import styles from "@/styles/projects.module.css";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Project = (props) => {
  const [classMode, setClassMode] = useState();
  const [unset, setUnset] = useState(true);
  let icons = <></>;
  if (props.active) {
    icons = (
      <>
        <Image
          src={props.icons[0]}
          className={styles.icon1 + " " + styles.iconGeneral}
          width="100"
          height="100"
          alt="Icon"
        ></Image>
        <Image
          src={props.icons[1]}
          className={styles.icon2 + " " + styles.iconGeneral}
          width="100"
          height="100"
          alt="Icon"
        ></Image>
      </>
    );
  } else {
    icons = (
      <>
        <Image
          src={props.icons[0]}
          className={styles.icon + " " + styles.iconGeneral}
          width="100"
          height="100"
          alt="Icon"
        ></Image>
        <Image
          src={props.icons[1]}
          className={styles.icon + " " + styles.iconGeneral}
          width="100"
          height="100"
          alt="Icon"
        ></Image>
      </>
    );
  }

  if (unset) {
    setUnset(false);
    if (props.value == 0) {
      setClassMode(styles.dodo);
    }
    if (props.value == 1) {
      setClassMode(styles.bb);
    }
    if (props.value == 2) {
      setClassMode(styles.furt);
    }
  }
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
        (props.active ? `${classMode} ` : "")
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
        <Link href={"./" + props.name.toLowerCase()} className={styles.button}>
          explore
        </Link>
      </div>
      {icons}
    </div>
  );
};

export default Project;
