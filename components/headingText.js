import Head from "next/head";
import styles from "@/styles/heading.module.css";
import { useState, useEffect } from "react";

const HeadingText = () => {
  return (
    <div className={styles.leftContainer}>
      <div className={styles.heading}>
        Hannes <br /> Scheibelauer
      </div>
      <div className={styles.leftText}>
        <p>Hallo!</p>
        <p>Ich bin ein</p>
        <p className={styles.leftWrite}>Web developer</p>
        <p>aus Österreich</p>
      </div>
    </div>
  );
};

export default HeadingText;
