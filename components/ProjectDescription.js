import styles from "@/styles/projectsDescription.module.css";
import { useEffect, useState } from "react";
import Project from "./project";

const Description = ({ project }) => {
  return (
    <div className={styles.main}>
      <div className={styles.heading}>Emerge</div>
      <div> {project.emergence}</div>
    </div>
  );
};

export default Description;
