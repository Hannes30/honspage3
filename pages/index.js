import CustomHead from "@/components/customHead";
import Top from "@/components/top";
import About from "@/components/about";
import Projects from "@/components/projects";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <>
      <CustomHead>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </CustomHead>

      <Top />
      <About />
      <Projects />
      <Contact />
    </>
  );
}
