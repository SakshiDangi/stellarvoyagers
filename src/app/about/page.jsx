import Image from "next/image";
import styles from "./about.module.scss";
import Contact from "@/components/contact/contact";

export const metadata = {
  title: "About Us",
  description: "About description",
};



export default function About() {
  // console.log("lets check where it works")
  return (
    <div>
      <h2 className={styles.subtitle}>About Stellar Voyagers Club</h2>
      <div className={styles.container}>
        <div className={styles.textContainer}>
          
          <h1 className={styles.title}>
            We create digital ideas that are bigger, bolder, braver and better.
          </h1>
          <p className={styles.desc}>Stellarvoyagers Club was launched in 2024. From launching rockets to designing rovers, students engaged in hands-on engineering and space exploration activities. The year-long STEM program culminated in a city-wide Space Colony Competition where students presented designs of a new world to STEM professionals. 
            Our Club is now available to educators/students around the world through the launch of the Stellar Voyagers Portal! Over 50 teammates now utilize the online articles and workshops to launch their own Space Club! 
          </p>
          <div className={styles.boxes}>
            <div className={styles.box}>
              <h1>10 K+</h1>
              <p>Year of experience</p>
            </div>
            <div className={styles.box}>
              <h1>10 K+</h1>
              <p>Year of experience</p>
            </div>
            <div className={styles.box}>
              <h1>10 K+</h1>
              <p>Year of experience</p>
            </div>
          </div>
        </div>
        <div className={styles.imgContainer}>
          <Image
            src="/about.png"
            alt="About Image"
            fill
            className={styles.img}
          />
        </div>
      </div>
      <h2 className={styles.subtitle}>Contact Us</h2>
      <div className={styles.container}>
        <div className={styles.imgContainer}>
          <Image
            src="/contact.png"
            alt="About Image"
            fill
            className={styles.img}
          />
        </div>
        <div>
          <Contact />
        </div>
      </div>
    </div>
  );
};
