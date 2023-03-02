import styles from "@/styles/about.module.css";
import AboutMeImage from "./aboutMeImage";
const About = () => {
  return (
    <div className={styles.main}>
      <div className={styles.left}>
        <div className={styles.heading}>About me</div>
        <div className={styles.text}>
          Hello! I'm a 17 year-old student currently studying at IT-HTL Ybbs. I
          have a passion for turning my ideas into reality through coding. My
          specialties include using JavaScript for web development, Adobe
          products for design, and Flutter for mobile development. During my
          free time, I also enjoy developing Unity games. I'm constantly
          exploring new technologies and expanding my skill set and I'm excited
          to see where my passion for coding takes me in the future.
        </div>
      </div>
      <div className={styles.right}>
        <AboutMeImage />
      </div>
    </div>
  );
};

export default About;
