import { useEffect, useRef, useState } from "react";
import styles from "@/styles/AboutMeImage.module.css";
import Image from "next/image";

const AboutMeImage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, 500);
        }
      },
      {
        rootMargin: "0px",
        threshold: 0.5, // Change this value to adjust when the intersection is detected
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <>
      <div className={styles.main}>
        <Image
          src="/images/about-image-Hannes.png"
          width="330"
          height="300"
          className={styles.image}
          alt="Iamge of Hannes Scheibelauer"
        />
        <div className={styles.imageBackground} />
        <div className={styles.icons}>
          <Image
            src="/images/Laptop.png"
            width="80"
            height="80"
            className={`${styles.icon} ${isVisible ? styles.icon0 : ""}`}
            ref={ref}
            alt="icon of laptop"
          />
          <Image
            src="/images/camera.png"
            width="80"
            height="80"
            className={`${styles.icon} ${isVisible ? styles.icon1 : ""}`}
            ref={ref}
            alt="icon of camera"
          />
          <Image
            src="/images/smartphone.png"
            width="80"
            height="80"
            className={`${styles.icon} ${isVisible ? styles.icon2 : ""}`}
            ref={ref}
            alt="icon of smartphone"
          />
        </div>
      </div>
    </>
  );
};

export default AboutMeImage;
