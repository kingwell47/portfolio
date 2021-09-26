import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Navbar.module.scss";
import logo from "../../public/logo.png";
import MobileMenu from "./MobileMenu";

//Navbar links should scroll down the landing page
//The portfolio link should have a dropdown that has the option to view all projects when hovered

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleClick = () => {
    document.querySelector("body").classList.toggle("open");
    setMenuOpen(!menuOpen);
  };
  return (
    <nav className={`${styles.navbar}`}>
      <Link href='/'>
        <a className={styles.home}>
          <Image src={logo} alt='Joel P. Doctor' />
          Joel P. Doctor
        </a>
      </Link>
      {menuOpen && <MobileMenu />}
      <button
        className={
          menuOpen
            ? `${styles.mobile__toggle} ${styles.open} hide-for-desktop`
            : `${styles.mobile__toggle} hide-for-desktop`
        }
        title='mobile menu'
        aria-label='open-menu'
        aria-expanded={menuOpen}
        onClick={handleClick}>
        <span></span>
        <span></span>
        <span></span>
      </button>
      <div className={styles.links_wrap}>
        <ul className={`${styles.desktop__links} hide-for-mobile`}>
          <li className={styles.desktop__link}>
            <Link href='/'>Portfolio</Link>
          </li>
          <li className={styles.desktop__link}>
            <Link href='/'>Resume</Link>
          </li>
          <li className={styles.desktop__link}>
            <Link href='/'>About</Link>
          </li>
        </ul>
        <Link href='/'>
          <a>
            <button className={`${styles.desktop__button} btn hide-for-mobile`}>
              Contact Me
            </button>
          </a>
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;
