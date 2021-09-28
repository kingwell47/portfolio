import { useState } from "react";

const DUMMY_DATA = [
  {
    id: 1,
    title: "Title 1",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore deleniti blanditiis praesentium alias accusamus amet dolore soluta eveniet sunt dolorum",
    tags: "html",
    image: "test image",
  },
  {
    id: 2,
    title: "Title 2",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore deleniti blanditiis praesentium alias accusamus amet dolore soluta eveniet sunt dolorum",
    tags: "css",
    image: "test image",
  },
  {
    id: 3,
    title: "Title 3",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore deleniti blanditiis praesentium alias accusamus amet dolore soluta eveniet sunt dolorum",
    tags: "javascript",
    image: "test image",
  },
];

function Porftolio() {
  const [data, setData] = useState(DUMMY_DATA);

  const handleChange = (e) => {
    let selection = e.target.value.toLowerCase();
    const newData = DUMMY_DATA.filter((item) => {
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
        <div>{props.values.image}</div>
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
          return <CardElem key={item.id} values={item} />;
        })}
      </div>
    </section>
  );
}

export default Porftolio;
