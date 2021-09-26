import Link from "next/link";
import styles from "./Hero.module.scss";
import IconGrid from "./IconGrid";

//Clicking on one of the hero index icons should link to the portfolio page and filter for what the user clicked

function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.left}>
        <p className={styles.supertitle}>I am</p>
        <h1 className={styles.title}>Joel P. Doctor</h1>
        <p className={styles.subtitle}>{'"Joel of all trades"'}</p>
        <p className={styles.text}>
          Web Development <br />
          Project Management <br />
          Customer Support <br />
          Graphic Design
        </p>
        <Link href='/contact' passHref>
          <button className={`${styles.button} btn`}>Contact Me</button>
        </Link>
      </div>
      <IconGrid />
    </section>
  );
}

export default Hero;
