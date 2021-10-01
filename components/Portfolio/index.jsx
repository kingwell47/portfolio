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
      <div>
        <h2>{props.values.title}</h2>
        <p>{props.values.description}</p>
        <p>{props.values.tags}</p>
        <Image
          src={`/images/portfolio/${props.values.image}`}
          alt={props.values.image}
          width='300'
          height='300'
        />
        <Link href={`/portfolio/${props.values._id}`}>Learn More</Link>
      </div>
    );
  }
  function TopFilter(props) {
    return (
      <form onReset={handleReset}>
        <label htmlFor='tags'>Tags: </label>
        <select
          value={props.selected}
          name='tags'
          onChange={(e) => props.handler(e)}>
          <option value='' defaultValue></option>
          {dropDown.map((item, index) => (
            <option key={index} value={item}>
              {item}
            </option>
          ))}
        </select>
        <label htmlFor='sorting'>Sort by: </label>
        <select
          value={props.sorting}
          name='sorting'
          onChange={(e) => props.sorter(e)}>
          <option value='date down' defaultValue>
            Date Descending
          </option>
          <option value='date up'>Date Ascending</option>
          <option value='name a-z'>Name A-Z</option>
          <option value='name z-a'>Name Z-A</option>
        </select>
        <input type='reset' value='Reset' />
      </form>
    );
  }
  return (
    <section className={`container`}>
      <TopFilter
        selected={selected}
        sorting={sortingBy}
        handler={handleChange}
        sorter={handleSort}
      />
      <div>
        {displayData.map((item) => {
          return <CardElem key={item._id} values={item} />;
        })}
      </div>
    </section>
  );
}

export default Porftolio;
