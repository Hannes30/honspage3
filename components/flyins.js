import styles from "@/styles/flyins.module.css";

const Flyins = () => {
  let random = 0;

  const items = {
    items: [
      { icon: "/images/logos/ReactLogo.png", alt: "React icon" },
      { icon: "/images/logos/FlutterLogo.png", alt: "Flutter icon" },
      { icon: "/images/logos/PSLogo.png", alt: "Photoshop Logo" },
      { icon: "/images/logos/UnityLogo.png", alt: "Unity Logo" },
    ],
  };

  let multiplier = 10;
  const divStyles = [
    {
      top: Math.floor(Math.random() * multiplier) + 10 + `%`,
      left: Math.floor(Math.random() * multiplier) + 10 + `%`,
    },
    {
      top: Math.floor(Math.random() * multiplier) + 55 + `%`,
      right: Math.floor(Math.random() * multiplier) + 10 + `%`,
    },
    {
      top: Math.floor(Math.random() * multiplier) + 65 + `%`,
      left: Math.floor(Math.random() * multiplier) + 10 + `%`,
    },
    {
      top: Math.floor(Math.random() * multiplier) + 10 + `%`,
      right: Math.floor(Math.random() * multiplier) + 10 + `%`,
    },
  ];

  return (
    <div className={styles.main}>
      {items.items.map((item, index) => {
        random = Math.floor(Math.random() * divStyles.length);
        const style = divStyles[random];
        divStyles.splice(random, 1);
        return (
          <div key={index} className={`${styles.itemContainer}`} style={style}>
            <img
              src={item.icon}
              className={styles.itemImage}
              alt={`${item.alt}`}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Flyins;
