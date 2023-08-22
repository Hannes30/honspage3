import React from "react";
import projects from "../public/projects.json";
import styles from "@/styles/projectsPage.module.css";
import ProjectTop from "@/components/projectsTop";
import CustomHead from "@/components/customHead";
import Stats from "@/components/projectStats";
import Description from "@/components/description";
import HomeButton from "@/components/HomeButton";

export default function ProjectPage({ project }) {
  return (
    <>
      <CustomHead>
        {" "}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </CustomHead>
      <HomeButton></HomeButton>
      <div className={styles.main}>
        <ProjectTop project={project} />
        <Stats stats={project.usedTechnologies} />
        <Description project={project} />
      </div>
    </>
  );
}

export async function getStaticPaths() {
  const paths = projects.projects.map((project) => ({
    params: { name: project.name.toLowerCase() },
  }));

  return { paths, fallback: false };
}
export async function getStaticProps({ params }) {
  const { name } = params;

  const project = projects.projects.find(
    (project) => project.name.toLowerCase() === name
  );

  return { props: { project } };
}
