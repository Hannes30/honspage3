import React from "react";
import { useRouter } from "next/router";
import projects from "../public/projects.json";
import Image from "next/image";
import styles from "@/styles/projectsPage.module.css";
import Top from "@/components/projectsTop";
import CustomHead from "@/components/customHead";

export default function ProjectPage({ project }) {
  return (
    <>
      <CustomHead>
        <title>{project.name}</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </CustomHead>
      <div className={styles.main}>
        <Top project={project} />
        
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
