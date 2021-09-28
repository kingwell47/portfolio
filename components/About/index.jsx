import Link from "next/link";
import Image from "next/image";
import bike from "../../public/images/about/about.png";

import styles from "./About.module.scss";
//About should have one of my photos on the side and have the contact me CTA at the bottom

function About() {
  return (
    <section className={`${styles.about} container`} id='about'>
      <h2 className={styles.title}>About Me</h2>
      <hr />
      <div className={styles.bottom}>
        <div className={`${styles.image_wrap} hide-for-mobile`}>
          <Image src={bike} alt='bike' layout='fill' />
        </div>
        <div className={styles.right}>
          <div className={styles.text_wrap}>
            <p className={styles.text}>
              For the past 6 years I have been working as a Team Manager for a
              BPO company.
            </p>
            <p className={styles.text}>
              Recently, I have re-discovered my passion for Web Development
              dating back from the days of Friendster Overlays that modified
              that site’s look based on custom CSS.
            </p>
            <p className={styles.text}>
              Since then I have been learning all I can about subjects like CSS,
              Reactjs, Express, Nextjs, etc. and building projects from sites
              like Front End Mentor in my spare time.
            </p>
            <p className={styles.text}>
              This site is the culmination of everything that I learned and hope
              to put into practice.
            </p>
            <p className={styles.text}>You can also find me here:</p>
          </div>
          <ul className={styles.links}>
            <li className={styles.link}>
              <a
                href='https://github.com/kingwell47'
                rel='noreferrer'
                target='_blank'>
                <Image
                  src='/images/about/github.png'
                  alt='github'
                  width='100%'
                  height='100%'
                />
              </a>
            </li>
            <li className={styles.link}>
              <a
                href='https://www.frontendmentor.io/profile/kingwell47'
                rel='noreferrer'
                target='_blank'>
                <Image
                  src='/images/about/fem.png'
                  alt='frontend mentor'
                  width='100%'
                  height='100%'
                />
              </a>
            </li>
            <li className={styles.link}>
              <a
                href='https://www.freecodecamp.org/kingwell'
                rel='noreferrer'
                target='_blank'>
                <Image
                  src='/images/about/fcc.svg'
                  alt='freecodecamp'
                  width='100%'
                  height='100%'
                />
              </a>
            </li>
            <li className={styles.link}>
              <a
                href='https://www.linkedin.com/in/joel-d-05854919/'
                rel='noreferrer'
                target='_blank'>
                <Image
                  src='/images/about/linkedin.png'
                  alt='linkedin'
                  width='100%'
                  height='100%'
                />
              </a>
            </li>
          </ul>
          <Link href='/contact' passHref>
            <button className={`${styles.button} btn`}>Contact Me</button>
          </Link>
        </div>
      </div>
      <hr />
    </section>
  );
}

export default About;
