import Image from "next/image";
import styles from "./Resume.module.scss";
import resume from "./images/resume.png";

//The resume image should be scrollable or I should embed a PDF preview on the side of the portfolio

//Mobile can probably be just a static image

function Resume() {
  return (
    <section className={`${styles.resume} container`} id='resume'>
      <h2 className={styles.title}>Résumé</h2>
      <hr />
      <div className={styles.top}>
        <div className={styles.text_wrapper}>
          <h3 className={styles.inner_title}>Highlights:</h3>
          <p className={styles.text}>Certificates from FreeCodeCamp.com:</p>
          <ul className={styles.list}>
            <li className={styles.list_item}>
              <a
                href='https://www.freecodecamp.org/certification/kingwell/responsive-web-design'
                rel='noreferrer'
                target='_blank'>
                Responsive Web Design
              </a>
            </li>
            <li className={styles.list_item}>
              <a
                href='https://www.freecodecamp.org/certification/kingwell/javascript-algorithms-and-data-structures'
                rel='noreferrer'
                target='_blank'>
                Javascript Algorithms and Data Structures
              </a>
            </li>
            <li className={styles.list_item}>
              <a
                href='https://www.freecodecamp.org/certification/kingwell/front-end-development-libraries'
                rel='noreferrer'
                target='_blank'>
                Front End Development Libraries
              </a>
            </li>
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
          <a
            href='/joel_doctor_resume.pdf'
            rel='noreferrer'
            target='_blank'
            download>
            <button className='btn'>Download</button>
          </a>
        </div>
        <div className={`${styles.image_wrapper} hide-for-mobile`}>
          <Image src={resume} alt='resume' />
        </div>
      </div>

      <hr />
    </section>
  );
}

export default Resume;
