import React from 'react'
import styles from "./Hero.module.css";
import phoneimg from "../../assets/phone__img.png";
import heroimg from "../../assets/hero__img.png";

export const Hero = () => {
  return (
    <section id={styles.hero}>
   <div className="container">
    <div className="hero__content">
    <h1 className={styles["hero__title"]}>Quality cleaning for your home</h1>
    <p className={styles["hero__text"]}>Condimentum mauris sit cursus amet id non neque pharetra nulla ornare sed facilisis senectus dapibus nibh ultrices eget suscipit aliquet et nulla magna lacus penatibus.</p>
    <div className="hero-content__footer">
       <button className={styles["hero__btn"]}>Get a free quote</button>
       <div className="hero-content-footer__right">
        <div className="hero-content__footer__img">
          <img src={phoneimg} alt="phoneimg" />
        </div>
        <div className="hero-footer__contact">
          <p className={styles["hero__contact-info"]}></p>
        <p className={styles["hero__contact-phone"]}></p>
        </div>
       </div>
    </div>
   </div>
   </div>
   <div className="hero__img">
    <img src={heroimg} alt="heromainimg" />
   </div>
    </section>
  )
}

export default Hero