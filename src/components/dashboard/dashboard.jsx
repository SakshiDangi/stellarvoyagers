import Image from "next/image";
import styles from "./dashboard.module.scss";
import heroImage from "../../../public/assets/hero.gif";
export default function Dashboard() {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Command the Stars: Your Hub for Cosmic Exploration</h1>
        <p className={styles.desc}>
        Embark on a journey through Stellar Voyagers from an early age! With engaging content and interactive platforms, we empower young minds to reach for the stars while cultivating a strong scientific temperament and literacy.
        </p>
        <div className={styles.buttons}>
          <button className={styles.button}>Learn More</button>
          <button className={styles.button}>Contact</button>
        </div>
        <div className={styles.brands}>
          <Image src="/brands.png" alt="" fill className={styles.brandImg}/>
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image src={heroImage} alt="Dashboard Image" fill className={styles.heroImg}/>
      </div>
    </div>
  )
}
