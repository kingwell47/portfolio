import { useState, useEffect } from "react";
import CardElem from "./CardElem";
import projectData from "./data.json";
import styles from "./Portfolio.module.scss";
import TopFilter from "./TopFilter";

function Portfolio() {
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

  return (
    <section className={`${styles.portfolio} container`}>
      <h1 className={styles.title}>All Projects</h1>
      <TopFilter
        selected={selected}
        sorting={sortingBy}
        handler={handleChange}
        sorter={handleSort}
        reset={handleReset}
        dropDown={dropDown}
      />
      <div className={styles.display}>
        {displayData.map((item) => {
          return <CardElem key={item._id} values={item} />;
        })}
      </div>
    </section>
  );
}

export default Portfolio;
