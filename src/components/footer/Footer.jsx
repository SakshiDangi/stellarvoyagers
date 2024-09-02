import styles from "./footer.module.scss";

export default function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>StellaVoyagers</div>
      <div className={styles.text}>
        StellaVoyagers creative thoughts agency © All rights reserved.
      </div>
    </div>
  );
};



