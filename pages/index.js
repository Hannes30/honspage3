import Head from "next/head";
import CustomHead from "@/components/customHead";
import Image from "next/image";
import { Inter } from "@next/font/google";
import Top from "@/components/top";
import About from "@/components/about";
import Projects from "@/components/projects";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <CustomHead>
        <title>Hannes Scheibelauer</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </CustomHead>
      <Top />
      <About />
      <Projects />
    </>
  );
}
