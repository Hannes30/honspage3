import styles from "@/styles/stats.module.css";
import { useEffect, useState, useRef } from "react";
import React from "react";
import Image from "next/image";

const Stat = ({ item }) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        rootMargin: "0px", // Change this value to adjust when the intersection is detected
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
      <div
        ref={ref}
        className={
          styles.stat +
          " " +
          (isVisible ? styles.visibleStat : styles.inVisibleStat)
        }
      >
        <Image
          src={item.icon}
          width="125"
          height="125"
          className={styles.image}
          alt="Icon"
        ></Image>
        <div className={styles.textArea}>
          <div className={styles.statHeading}>{item.name}</div>
          <div className={styles.text}>{item.description}</div>
        </div>
      </div>
    </>
  );
};

export default Stat;
