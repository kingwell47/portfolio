import Image from "next/image";
import styles from "./Hero.module.scss";
import logos from "./icons";

function IconGrid() {
  return (
    <div className={styles.iconGrid}>
      {logos.map((item) => {
        return (
          <div key={item.name} className={styles.icon}>
            <Image src={item.logo} alt={item.name} />
          </div>
        );
      })}
    </div>
  );
}

export default IconGrid;
