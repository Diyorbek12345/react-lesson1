import React from 'react'
import styles from "./About.module.css";
import firstimg from "../../assets/about__img1.png";
import Secondimg from "../../assets/about__img2.png";
import Thirdimg from "../../assets/about__img3.png";

export const About = () => {
  return (
    <section>
      <div className="container">
   <div className={styles["about__header"]}>
     <h2 className={styles["about__title"]}>About Us</h2>
    <p className={styles["about__text"]}>Sagittis nibh scelerisque vitae eget vulputate sem elementum sed neque nisi felis non ultrices massa id egestas quam velit pretium nu.</p>
   </div>
   <ul className={styles["about__list"]}>
    <li className={styles["about__item"]}>
      <div className={styles["about__img"]}>
        <img src={firstimg} alt="about__img" />
      </div>
      <h3 className={styles["about__subtitle"]}>1. Schedule online</h3>
      <p className={styles["about__text"]}>Sagittis nibh scelerisque vitae egetolment vulputate sem elementum sed n.</p>
    </li>
    <li className={styles["about__item"]}>
      <div className={styles["about__img"]}>
        <img src={Secondimg} alt="about__img" />
      </div>
      <h3 className={styles["about__subtitle"]}>2. Pay online easily</h3>
      <p className={styles["about__text"]}>Vitae ut accumsan blandit ullamcorperolm suscipit dui gravida amet at nunc.</p>
    </li>
    <li className={styles["about__item"]}>
      <div className={styles["about__img"]}>
        <img src={Thirdimg} alt="about__img" />
      </div>
      <h3 className={styles["about__subtitle"]}>3. Get your house cleaned</h3>
      <p className={styles["about__text"]}>Nunc maecenas sollicitudin metus tellus mattis sed porttitor cursus eleifend.</p>
    </li>
   </ul>
   <div className={styles["about__btns"]}>
    <button className={styles["about__btn1"]}>Get a free quote</button>
    <button className={styles["about__btn2"]}>Explore services</button>
   </div>
      </div>
    </section>
  )
}

export default About