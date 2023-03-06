import styles from "@/styles/projectsPage.module.css";
import Link from "next/link";
import Image from "next/image";
const ProjectTop = ({ project }) => {
  const imgDiv = {
    backgroundImage: `url(${project.img})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "50% 0%",
    height: "100%",
    width: "60vw",
  };
  const imgDivParent = {
    background: `radial-gradient(${project.backgroundColor2}, ${project.backgroundColor1}) `,
  };
  return (
    <>
      <div className={styles.top} style={imgDivParent}>
        <Link
          href={project.img}
          style={imgDiv}
          className={styles.imageTop}
        ></Link>
      </div>
      <div className={styles.textTop}>
        <div className={styles.heading}>{project.name}</div>
        <Image
          src={project.icons[0]}
          width="100"
          height="100"
          alt="Icon 1"
        ></Image>
        <div className={styles.shortDescription + " " + styles.flyin}>
          {project.description}
        </div>
        <Image
          src={project.icons[1]}
          width="100"
          height="100"
          alt="Icon 1"
        ></Image>
      </div>
    </>
  );
};

export default ProjectTop;
