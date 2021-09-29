import { useState } from "react";
import Image from "next/image";
import projectData from "./data.json";

function Porftolio() {
  const [data, setData] = useState(projectData);

  const handleChange = (e) => {
    let selection = e.target.value.toLowerCase();
    const newData = projectData.filter((item) => {
      if (selection === "") return item;
      return item.tags.toLowerCase().includes(selection);
    });
    setData(newData);
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
      </div>
    );
  }
  return (
    <section className={`container`}>
      <div>
        <label htmlFor='tags'>Tags: </label>
        <select name='tags' onChange={(e) => handleChange(e)}>
          <option value=''></option>
          <option value='html'>HTML</option>
          <option value='css'>CSS</option>
          <option value='javascript'>JavaScript</option>
        </select>
      </div>
      <div>
        {data.map((item) => {
          return <CardElem key={item._id} values={item} />;
        })}
      </div>
    </section>
  );
}

export default Porftolio;
