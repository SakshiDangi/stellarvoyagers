"use client"

import { addPost } from "@/lib/action";
import styles from "./joinForm.module.scss";
import { useFormState } from "react-dom";

const JoinForm = ({userId}) => {
  const [state, formAction] = useFormState(addPost, undefined);
  
  return (
    <form action={formAction} className={styles.container}>
      <div>
      <h1 className={styles.heading}>Join Us Please Fill this Form</h1>
      <p>What is the day in the life of an astrologist? What does an astronaut do for fun?</p>
      <p className={styles.p}>If you want to connect with and from a scientist, engineers, or other STEM professionals? Submit your question to be a part of team.</p>
      </div>
      <label className={styles.label}>Your Name / Team Name</label>      
      <input type="text" name="name" placeholder="Name " required="true" />
      <label className={styles.label}> Write your Email</label>
      <input type="email" name="email" placeholder="Email" required="true"/>

      <label className={styles.label}>
        School or College Name</label>
      <input type="text" name="school" placeholder="school name" required="true"/>
      
      <label className={styles.label}>In which class you are?</label>
      <input type="text" name="class" placeholder="class" required="true"/>
     
      <label className={styles.label}>
        Address</label>
      <input type="text" name="address" placeholder="address" required="true"/>
      <label className={styles.label}>Profile Pic</label>
      <input type="text" name="img" placeholder="Image Url" required="true"/>
      <label className={styles.label}>Question 1: Why do you wanna join us?</label>
      <textarea type="text" name="desc" placeholder="" rows={5} required="true"/>
      
      <label className={styles.label}>Question 2: What do you want to know about the personal life of a STEM professional?</label>
      <textarea type="text" name="desc" placeholder="" rows={5} required="true"/>
     
      <label className={styles.label}>Question 3: What are you interested to learn more about?</label>
      <textarea type="text" name="desc" placeholder="" rows={5} required="true"/>
    
      <button>Submit</button>
      {state?.error}
    </form>
  );
};

export default JoinForm;