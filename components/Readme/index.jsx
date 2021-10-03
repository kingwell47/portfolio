import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Markdown from "markdown-to-jsx";
import styles from "./Readme.module.scss";

function Readme(props) {
  return (
    <>
      <section className={`${styles.readme} container`}>
        <Link href='/portfolio'>
          <a className={styles.back}>&larr; Back to All Projects</a>
        </Link>
        <div className={styles.image_wrapper}>
          <Image
            src={
              require(`../../public/images/portfolio/${props.image}`).default
            }
            alt={props.image}
            className={styles.image}
            placeholder='blur'
          />
        </div>
        <Markdown className={styles.text}>{props.innerContent}</Markdown>
        <Link href='/portfolio'>
          <a className={styles.back}>&larr; Back to All Projects</a>
        </Link>
      </section>
    </>
  );
}

export default Readme;
