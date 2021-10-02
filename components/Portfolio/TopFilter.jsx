import React from "react";
import styles from "./Portfolio.module.scss";

function TopFilter(props) {
  return (
    <form onReset={props.reset} className={styles.filter}>
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
          {props.dropDown.map((item, index) => (
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

export default TopFilter;
