import Image from "next/image";
import Link from "next/link";
import styles from "./Portfolio.module.scss";

function CardElem(props) {
  return (
    <div className={styles.card}>
      <div className={styles.image}>
        <Image
          src={
            require(`../../public/images/portfolio/${props.values.image}`)
              .default
          }
          alt={props.values.image}
          placeholder='blur'
        />
      </div>
      <div className={styles.left}>
        <h2 className={styles.card_title}>{props.values.title}</h2>
        <p className={styles.card_date}>Completed: {props.values.date}</p>
        <p className={styles.card_description}>{props.values.description}</p>
        <p className={styles.card_tags}>Tags: {props.values.tags}</p>
        <ul className={styles.buttons}>
          <li>
            <a href={props.values.url1} rel='noreferrer' target='_blank'>
              <button className={`${styles.button} btn`}>Live Site</button>
            </a>
          </li>
          <li>
            <a href={props.values.url2} rel='noreferrer' target='_blank'>
              <button className={`${styles.button} btn`}>Github</button>
            </a>
          </li>
        </ul>
        <Link href={`/portfolio/${props.values._id}`}>Read More</Link>
      </div>
    </div>
  );
}

export default CardElem;
