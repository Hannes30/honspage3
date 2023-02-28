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
        <p>Hello!</p>
        <p>I'm a 17yr old</p>
        <p className={styles.leftWrite}>Web developer</p>
        <p>from Austria</p>
      </div>
    </div>
  );
};

export default HeadingText;
