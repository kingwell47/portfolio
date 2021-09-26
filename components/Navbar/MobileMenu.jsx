import Link from "next/link";
import styles from "./Navbar.module.scss";

//Mobile menu should behave like a normal mobile menu but will transition to the contact form if the contact me button is clicked

function MobileMenu() {
  return (
    <div className={`${styles.mobile__menu} hide-for-desktop`}>
      <ul className={styles.mobile__links}>
        <li className={styles.mobile__link}>
          <a href='#works'>Featured Work</a>
        </li>
        <li className={styles.mobile__link}>
          <a href='#resume'>Résumé</a>
        </li>
        <li className={styles.mobile__link}>
          <a href='#about'>About</a>
        </li>
        <li>
          <Link href='/contact'>
            <a>
              <button className={`${styles.mobile__button} btn`}>
                Contact Me
              </button>
            </a>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default MobileMenu;
