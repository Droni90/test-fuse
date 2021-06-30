import "./app.css";
import Card from "../Card/Card";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);
  const [filterValue, setFilterValue] = useState("");

  useEffect(() => {
    fetch("https://603e38c548171b0017b2ecf7.mockapi.io/homes")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((e) => console.log(e));
  }, []);

  const handleFilter = (evt) => {
    setFilterValue(evt.target.value);
  };

  return (
    <section className="main">
      <h1 className="main__title">Our Latest Developments</h1>
      <label htmlFor="filter" className="main__label">
        Filter
      </label>
      <input
        id="filter"
        className="main__input"
        value={filterValue}
        onChange={handleFilter}
      />
      <div className="content">
        {filterValue.length > 3
          ? data
              .filter((item) => item.title.startsWith(filterValue))
              .map((item) => <Card key={item.id} card={item} />)
          : data.map((item) => <Card key={item.id} card={item} />)}
      </div>
      <button className="main__button">See more</button>
    </section>
  );
}

export default App;
