import styles from "@/styles/about.module.css";
import AboutMeImage from "./aboutMeImage";
const About = () => {
  return (
    <div className={styles.main}>
      <div className={styles.left}>
        <div className={styles.heading}>Über mich</div>
        <div className={styles.text}>
          Hallo! Ich bin ein 17-jähriger Schüler, der derzeit die IT-HTL Ybbs
          besucht. Ich habe eine Leidenschaft dafür, meine Ideen durch das
          Programmieren in die Realität umzusetzen. Meine Spezialgebiete
          umfassen die Verwendung von JavaScript für die Webentwicklung,
          Adobe-Produkte für das Design und Flutter für die Entwicklung von
          mobilen Anwendungen. In meiner Freizeit entwickle ich auch gerne
          Unity-Spiele. Ich erkunde ständig neue Technologien und erweitere mein
          Fähigkeiten, und ich bin gespannt zu sehen, wohin mich meine
          Leidenschaft für das Programmieren in der Zukunft führen wird.
        </div>
      </div>
      <div className={styles.right}>
        <AboutMeImage />
      </div>
    </div>
  );
};

export default About;
