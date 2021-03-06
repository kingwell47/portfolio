import Link from "next/link";
import Image from "next/image";
import images from "./images";
import styles from "./Works.module.scss";
import Card from "./Card";

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
    text: "Responsive landing page with working URL Shortening using API",
    tech: [
      { logo: images.html, name: "html" },
      { logo: images.css, name: "css" },
      { logo: images.javascript, name: "javascript" },
      { logo: images.react, name: "react" },
    ],
    live: "http://kingwell47.github.io/url-shortnening",
    git: "https://github.com/kingwell47/url-shortnening",
    internal: "/portfolio/url-shortening",
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
    internal: "/portfolio/javascript-calculator",
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
    internal: "/portfolio/pomodoro-timer",
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
    internal: "/portfolio/room-homepage",
  },
];

function Works() {
  return (
    <section className={styles.work} id="works">
      <h2 className={styles.title}>Featured Work</h2>
      <hr />
      <div className={styles.cards}>
        {CONTENT.map((item, index) => {
          return <Card content={item} key={index} />;
        })}
      </div>
      <hr />
      <Link href="/portfolio" passHref>
        <button className="btn">See All Projects</button>
      </Link>
    </section>
  );
}

export default Works;
