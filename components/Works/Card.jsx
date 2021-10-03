import Image from "next/image";
import Link from "next/link";
import styles from "./Works.module.scss";

function Card({ content }) {
  return (
    <div className={styles.card}>
      <Image
        src={content.image}
        alt={content.title}
        className={styles.image}
        placeholder='blur'
      />
      <div className={styles.bottom_wrapper}>
        <p className={styles.text}>{content.text}</p>
        <ul className={styles.tech_wrapper}>
          {content.tech.map((item, index) => {
            return (
              <li key={index} className={styles.icon}>
                <Image src={item.logo} alt={item.name} />
              </li>
            );
          })}
        </ul>
        <div className={styles.button_wrapper}>
          <a href={content.live} rel='noreferrer' target='_blank'>
            <button className='btn'>Live Site</button>
          </a>
          <a href={content.git} rel='noreferrer' target='_blank'>
            <button className='btn'>GitHub</button>
          </a>
        </div>
        <Link href={content.internal}>Read More</Link>
      </div>
    </div>
  );
}

export default Card;
