import styles from "@/styles/flyins.module.css";

const Flyins = () => {
  const items = {
    items: [
      { icon: "/images/ReactLogo.png", alt: "React icon" },
      { icon: "/images/FlutterLogo.png", alt: "Flutter icon" },
      { icon: "/images/PSLogo.png", alt: "Photoshop Logo" },
      { icon: "/images/UnityLogo.png", alt: "Unity Logo" },
    ],
  };

  return (
    <div className={styles.main}>
      {items.items.map((item, index) => (
        <div
          key={index}
          className={`${styles.itemContainer} ${styles.itemContainer}${index}`}
        >
          <img
            src={item.icon}
            className={styles.itemImage}
            alt={`${item.alt}`}
          />
        </div>
      ))}
    </div>
  );
};

export default Flyins;
