import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import projectData from "./data.json";
import styles from "./Portfolio.module.scss";

function Porftolio() {
  const [data, setData] = useState([]);
  const [displayData, setDisplayData] = useState([...data]);
  const [selected, setSelected] = useState("");
  const [sortingBy, setSortingBy] = useState("");
  const [dropDown, setDropDown] = useState([]);

  const populateDropDown = () => {
    let selectionItems = [];
    projectData.forEach((item) => {
      item.tags.split(", ").forEach((element) => {
        if (!selectionItems.includes(element)) {
          selectionItems.push(element);
        }
      });
    });

    setDropDown(selectionItems);
  };

  const initialSort = () => {
    let sortData = [...projectData];
    sortData.sort((a, b) => {
      return Date.parse(b.date) - Date.parse(a.date);
    });
    setData(sortData);
    setDisplayData(sortData);
  };

  useEffect(() => {
    populateDropDown();
    initialSort();
  }, []);

  const handleChange = (e) => {
    let selection = e.target.value.toLowerCase();
    let originalData = [...data];
    const newData = originalData.filter((item) => {
      if (selection === "") return item;
      return item.tags.toLowerCase().includes(selection);
    });
    setSelected(e.target.value);
    setDisplayData(newData);
    setSortingBy("Date Descending");
  };

  const handleSort = (e) => {
    let sortingData = [...displayData];
    switch (e.target.value) {
      case "date down":
        sortingData.sort((a, b) => {
          return Date.parse(b.date) - Date.parse(a.date);
        });
        break;
      case "date up":
        sortingData.sort((a, b) => {
          return Date.parse(a.date) - Date.parse(b.date);
        });
        break;
      case "name a-z":
        sortingData.sort((a, b) =>
          a.title > b.title ? 1 : b.title > a.title ? -1 : 0
        );
        break;
      case "name z-a":
        sortingData.sort((a, b) =>
          b.title > a.title ? 1 : a.title > b.title ? -1 : 0
        );
        break;
      default:
        return;
    }
    setSortingBy(e.target.value);
    setDisplayData(sortingData);
  };

  const handleReset = () => {
    initialSort();
    setSelected("");
    setSortingBy("Date Descending");
  };

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
          />
        </div>
        <div className={styles.left}>
          <h2 className={styles.card_title}>{props.values.title}</h2>
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
  function TopFilter(props) {
    return (
      <form onReset={handleReset} className={styles.filter}>
        <div className={styles.wrapper}>
          <label htmlFor='tags' className={styles.label}>
            Filter by Tags:{" "}
          </label>
          <select
            value={props.selected}
            name='tags'
            onChange={(e) => props.handler(e)}
            className={styles.select}>
            <option value='' defaultValue></option>
            {dropDown.map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
        <div className={styles.wrapper}>
          <label htmlFor='sorting' className={styles.label}>
            Sort by:{" "}
          </label>
          <select
            value={props.sorting}
            name='sorting'
            onChange={(e) => props.sorter(e)}
            className={styles.select}>
            <option value='date down' defaultValue className={styles.option}>
              Date Descending
            </option>
            <option value='date up' className={styles.option}>
              Date Ascending
            </option>
            <option value='name a-z' className={styles.option}>
              Name A-Z
            </option>
            <option value='name z-a' className={styles.option}>
              Name Z-A
            </option>
          </select>
        </div>

        <input type='reset' value='Reset' className={`${styles.button} btn`} />
      </form>
    );
  }
  return (
    <section className={`${styles.portfolio} container`}>
      <h1 className={styles.title}>All Projects</h1>
      <TopFilter
        selected={selected}
        sorting={sortingBy}
        handler={handleChange}
        sorter={handleSort}
      />
      <div className={styles.display}>
        {displayData.map((item) => {
          return <CardElem key={item._id} values={item} />;
        })}
      </div>
    </section>
  );
}

export default Porftolio;
