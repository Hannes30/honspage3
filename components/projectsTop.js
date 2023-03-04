import styles from "@/styles/projectsPage.module.css";

const Top = ({ project }) => {
  const imgDiv = {
    backgroundImage: `url(${project.img})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "40% 40%",
    height: "100%",
    width: "60vw",
  };
  const imgDivParent = {
    background: `radial-gradient(${project.backgroundColor2}, ${project.backgroundColor1}) `,
  };
  return (
    <>
      <div className={styles.top} style={imgDivParent}>
        <div style={imgDiv} className={styles.imageTop}></div>
      </div>
      <div className={styles.textTop}>
        <div className={styles.heading}>{project.name}</div>
        <div className={styles.shortDescription + " " + styles.flyin}>
          {project.description}
        </div>
      </div>
    </>
  );
};

export default Top;
