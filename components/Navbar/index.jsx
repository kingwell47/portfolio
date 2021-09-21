import Link from "next/link";
import Image from "next/image";
import navStyles from "./Navbar.module.scss";
import logo from "../../public/logo.png";

function NavBar() {
  return (
    <nav className={navStyles.navbar}>
      <Link href='/' className={navStyles.navbar__home}>
        <a>
          <Image
            src={logo}
            className={navStyles.navbar__logo}
            alt='Joel P. Doctor'
          />
          Joel P. Doctor
        </a>
      </Link>
      <ul className={navStyles.navbar__mobile__links}>
        <li className={navStyles.navbar__mobile__link}>
          <Link href='/'>Portfolio</Link>
        </li>
        <li className={navStyles.navbar__mobile__link}>
          <Link href='/'>Resume</Link>
        </li>
        <li className={navStyles.navbar__mobile__link}>
          <Link href='/'>About</Link>
        </li>
        <Link href='/'>
          <a>
            <button className={navStyles.navbar__mobile__button}>
              Contact Me
            </button>
          </a>
        </Link>
      </ul>

      <button
        className={navStyles.navbar__mobile__toggle}
        title='mobile menu'
        aria-label='open-menu'
        aria-expanded='false'>
        <span></span>
        <span></span>
        <span></span>
      </button>

      <ul className={navStyles.navbar__desktop__links}>
        <li className={navStyles.navbar__desktop__link}>
          <Link href='/'>Portfolio</Link>
        </li>
        <li className={navStyles.navbar__desktop__link}>
          <Link href='/'>Resume</Link>
        </li>
        <li className={navStyles.navbar__desktop__link}>
          <Link href='/'>About</Link>
        </li>
        <Link href='/'>
          <a>
            <button className={navStyles.navbar__desktop__button}>
              Contact Me
            </button>
          </a>
        </Link>
      </ul>
    </nav>
  );
}

export default NavBar;
