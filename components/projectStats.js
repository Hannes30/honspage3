import styles from "@/styles/stats.module.css";
import Image from "next/image";
import Stat from "./projectStat";

const Stats = ({ stats }) => {
  return (
    <>
      <div className={styles.heading}>Used Technologie</div>
      <div className={styles.main}>
        {stats.map((item, index) => {
          return <Stat item={item} key={index} />;
        })}
      </div>
    </>
  );
};

export default Stats;
