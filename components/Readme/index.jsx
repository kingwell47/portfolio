import { useState, useEffect } from "react";
import { projectObj } from "./markdown";
import Image from "next/image";
import Link from "next/link";
import marked from "marked";
import styles from "./Readme.module.scss";

function Readme(props) {
  const [content, setContent] = useState();

  useEffect(() => {
    let converted = "";
    switch (props.page) {
      case 1:
        converted = marked(projectObj.sunnyside);
        break;
      case 2:
        converted = marked(projectObj.tipCalculator);
        break;
      case 3:
        converted = marked(projectObj.room);
        break;
      case 4:
        converted = marked(projectObj.previewer);
        break;
      case 5:
        converted = marked(projectObj.soundMachine);
        break;
      case 6:
        converted = marked(projectObj.calculator);
        break;
      case 7:
        converted = marked(projectObj.pomodoro);
        break;
      case 8:
        converted = marked(projectObj.shortening);
        break;
      default:
        return;
    }
    setContent({
      __html: converted,
    });
  }, []);

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
        <div dangerouslySetInnerHTML={content} className={styles.text} />
        <Link href='/portfolio'>
          <a className={styles.back}>Back to All Projects</a>
        </Link>
      </section>
    </>
  );
}

export default Readme;
