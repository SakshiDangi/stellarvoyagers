// "use client";
import Image from "next/image";
import styles from "./contact.module.scss";
// import dynamic from "next/dynamic";
// import HydrationTest from "@/components/hydrationTest";

// const HydrationTestNoSSR = dynamic(()=>import("@/components/hydrationTest"), {ssr: false})

export const metadata = {
  title: "Contact Page",
  description: "Contact description",
};

export default function Contact() {
  return (
    <div className={styles.container}>
      {/* <div className={styles.imgContainer}>
        <Image src="/contact.png" alt="" fill className={styles.img} />
      </div> */}
      <div className={styles.formContainer}>
        <form action="" className={styles.form}>
          <input type="text" placeholder="Full Name" />
          <input type="text" placeholder="Email" />
          <input type="text" placeholder="Phone Number (Optional)" />
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Message"
          ></textarea>
          <button>Send</button>
        </form>
      </div>
    </div>
  );
};

