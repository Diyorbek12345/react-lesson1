import styles from "./Header.module.css";
import logo from "../../assets/IMAGE.png";
import Hamburger from "../../assets/hamburger.png";



export const Header = () => {
  return (
  <header id={styles.header}>
   <div className="container header__container">
    <div className={styles["header__part1"]}>        
    <img src={logo} alt="main-logo" />
    <ul className={styles["header__list"]}>
      <li className={styles["header__item"]}>Home</li>
      <li className={styles["header__item"]}>About</li>
      <li className={styles["header__item"]}>Services</li>
      <li className={styles["header__item"]}>Articles</li>
      <li className={styles["header__item"]}>Contact</li>
    </ul>
    <img className={styles["hamburger__img"]} src={Hamburger} alt="hamburger" />
    </div>
    <div className={styles["header__part2"]}>        
    <p className= {styles["header__count"]}>Cart (0)</p>
    <button className={styles["header__btn"]}>Get a free quote</button>
    </div>
   </div>
  </header>
  )
}

export default Header