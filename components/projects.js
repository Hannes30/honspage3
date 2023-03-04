import styles from "@/styles/projects.module.css";
import { useEffect, useState } from "react";
import Project from "./project";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [active, setActive] = useState(1);

  useEffect(() => {
    async function fetchData() {
      const data = await getProjects();
      setProjects(data.projects);
    }
    fetchData();
  }, []);
  async function getProjects() {
    const response = await fetch("/api/projects");
    const data = await response.json();
    return data;
  }
  return (
    <div className={styles.main}>
      <div className={styles.heading}>Projects</div>
      <div className={styles.mainCards}>
        {projects.map((item, index) => {
          return (
            <Project
              key={index}
              name={item.name}
              active={active == index ? true : false}
              img={item.img}
              cb={setActive}
              value={index}
              icons={item.icons}
            >
              {item.description}
            </Project>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
