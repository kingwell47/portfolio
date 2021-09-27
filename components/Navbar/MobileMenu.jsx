import Link from "next/link";
import styles from "./Navbar.module.scss";

//Mobile menu should behave like a normal mobile menu but will transition to the contact form if the contact me button is clicked

function MobileMenu() {
  return (
    <div className={`${styles.mobile__menu} hide-for-desktop`}>
      <ul className={styles.mobile__links}>
        <li className={styles.mobile__link}>
          <Link href='/#'>Home</Link>
        </li>
        <li className={styles.mobile__link}>
          <Link href='/#works'>Featured Work</Link>
        </li>
        <li className={styles.mobile__link}>
          <Link href='/#resume'>Résumé</Link>
        </li>
        <li className={styles.mobile__link}>
          <Link href='/#about'>About</Link>
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
