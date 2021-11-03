import Image from "next/image";
import Link from "next/link";
import styles from "./Footer.module.scss";
import logo from "../../public/logo.png";

//Footer should have links to FEM, FCC, GitHub

function Footer() {
  return (
    <footer className={styles.footer}>
      <Link href='/#' passHref>
        <a>
          <Image src={logo} alt='' />
        </a>
      </Link>
      <div className={styles.text}>Created by Joel P. Doctor © 2021</div>
    </footer>
  );
}

export default Footer;
