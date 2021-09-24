import Link from "next/link";
import Image from "next/image";
import images from "./images";
import styles from "./Works.module.scss";

//Works will have tabs that cycle between different displays

//Tab 1 - WebDev
//Tab 2 - Management
//Tab 3 - Design
//Tab 4 - Writing
//Tab 5 - Under Construction

//

const CONTENT = [
  {
    image: images.url_shortening,
    title: "URL Shortening",
    text: "Responsive landing page with working URL Shortening link using API",
    tech: [
      { logo: images.html, name: "html" },
      { logo: images.css, name: "css" },
      { logo: images.javascript, name: "javascript" },
      { logo: images.react, name: "react" },
    ],
    live: "http://kingwell47.github.io/url-shortnening",
    git: "https://github.com/kingwell47/url-shortnening",
  },
  {
    image: images.calculator,
    title: "JavaScript Calculator",
    text: "JavaScript Calculator built with React",
    tech: [
      { logo: images.html, name: "html" },
      { logo: images.css, name: "css" },
      { logo: images.javascript, name: "javascript" },
      { logo: images.react, name: "react" },
    ],
    live: "https://kingwell47.github.io/javascript-calculator/",
    git: "https://github.com/kingwell47/javascript-calculator",
  },
  {
    image: images.pomodoro,
    title: "Pomodoro Timer",
    text: "Pomodoro timer built with React",
    tech: [
      { logo: images.html, name: "html" },
      { logo: images.css, name: "css" },
      { logo: images.javascript, name: "javascript" },
      { logo: images.react, name: "react" },
    ],
    live: "https://kingwell47.github.io/25-5-clock/",
    git: "https://github.com/kingwell47/25-5-clock",
  },
  {
    image: images.room,
    title: "Room Homepage",
    text: "Landing Page with sliding images and text",
    tech: [
      { logo: images.html, name: "html" },
      { logo: images.css, name: "css" },
      { logo: images.javascript, name: "javascript" },
    ],
    live: "https://kingwell47.github.io/room-homepage/",
    git: "https://github.com/kingwell47/room-homepage",
  },
];

function Works() {
  function TechList(props) {
    return (
      <>
        {props.items.map((item, index) => {
          return (
            <li key={index} className={styles.icon}>
              <Image src={item.logo} alt={item.name} />
            </li>
          );
        })}
      </>
    );
  }
  function Card(props) {
    return (
      <div className={styles.card}>
        <Image src={props.content.image} alt={props.content.title} />
        <div className={styles.bottom_wrapper}>
          <p className={styles.text}>{props.content.text}</p>
          <ul className={styles.tech_wrapper}>
            <TechList items={props.content.tech} />
          </ul>
          <div className={styles.button_wrapper}>
            <a href={props.content.live} rel='noreferrer' target='_blank'>
              <button className='btn'>Live Site</button>
            </a>
            <a href={props.content.git} rel='noreferrer' target='_blank'>
              <button className='btn'>GitHub</button>
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <section className={styles.work}>
      <h2 className={styles.title}>Featured Work</h2>
      {CONTENT.map((item, index) => {
        return <Card content={item} key={index} />;
      })}
      <Link href='/' passHref>
        <button className='btn'>See All</button>
      </Link>
    </section>
  );
}

export default Works;
