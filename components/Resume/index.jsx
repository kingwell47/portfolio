import Link from "next/link";
import styles from "./Resume.module.scss";

//The resume image should be scrollable or I should embed a PDF preview on the side of the portfolio

//Mobile can probably be just a static image

function Resume() {
  return (
    <section className={`${styles.resume} container`}>
      <div className={styles.text_wrapper}>
        <h2 className={styles.title}>Résumé Highlights</h2>
        <p className={styles.text}>
          Development certificates from FreeCodeCamp.com:
        </p>
        <ul className={styles.list}>
          <li className={styles.list_item}>Responsive Web Design</li>
          <li className={styles.list_item}>
            Javascript Algorithms and Data Structures
          </li>
          <li className={styles.list_item}>Front End Development Libraries</li>
        </ul>
        <p className={styles.text}>Awards and Achievements:</p>
        <ul className={styles.list}>
          <li className={styles.list_item}>
            Best Performing Team: 2020, 2018, 2017, 2016
          </li>
          <li className={styles.list_item}>Manager of the Year: 2017</li>
          <li className={styles.list_item}>Leadership Award: 2016</li>
          <li className={styles.list_item}>Employee of the Year: 2015</li>
        </ul>
      </div>
      <div className={`${styles.image_wrapper} hide-for-mobile`}>
        Resume Image
      </div>
      <a
        href='https://drive.google.com/file/d/18EUih1vnX3Mzqzgv7mcwgRERR5CUHBFZ/view?usp=sharing'
        rel='noreferrer'
        target='_blank'>
        <button className='btn'>Download</button>
      </a>
    </section>
  );
}

export default Resume;
