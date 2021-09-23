import image from "next/image";
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
];

function Works() {
  function TechList(props) {
    return (
      <>
        {props.items.map((item, index) => {
          return (
            <div key={index} className={styles.logo}>
              <Image src={item.logo} alt={item.name} />
            </div>
          );
        })}
      </>
    );
  }
  function Card(props) {
    return (
      <div>
        <Image src={props.content.image} alt={props.content.title} />
        <p>{props.content.text}</p>
        <TechList items={props.content.tech} />
      </div>
    );
  }

  return (
    <section>
      <h2>Works</h2>
      {CONTENT.map((item, index) => {
        return <Card content={item} key={index} />;
      })}
    </section>
  );
}

export default Works;
