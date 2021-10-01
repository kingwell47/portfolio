import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Markdown from "markdown-to-jsx";
import styles from "./Readme.module.scss";

function Readme(props) {
  return (
    <>
      <section className={styles.readme}>
        <Link href='/portfolio'>
          <a className={styles.back}>Back to All Projects</a>
        </Link>
        <div className={styles.image_wrapper}>
          <Image
            src={`/images/portfolio/${props.image}`}
            alt={props.image}
            layout='fill'
            className={styles.image}
          />
        </div>
        <Markdown className={styles.text}>{props.innerContent}</Markdown>
        <Link href='/portfolio'>
          <a className={styles.back}>Back to All Projects</a>
        </Link>
      </section>
    </>
  );
}

export default Readme;
