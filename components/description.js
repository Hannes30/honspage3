  import styles from "@/styles/projectsDescription.module.css";
import { useEffect, useState } from "react";
import Project from "./project";
import Image from "next/image";
import Link from "next/link";

const Description = ({ project }) => {
  return (
    <div className={styles.main}>
      <div className={styles.heading}>Erstellung</div>
      <div> {project.emergence}</div>
      <div className={styles.heading}>Ergebnis</div>
      <div> {project.result}</div>
      <Link href={project.link} className={styles.link} target="_blank">
        {project.linkName}
      </Link>
      <div className={styles.imageParent}>
        <Image
          src={project.img}
          className={styles.image}
          width="2000"
          height="1000"
          alt="Big Image"
        ></Image>
      </div>
    </div>
  );
};

export default Description;
