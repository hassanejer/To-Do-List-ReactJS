import React, { useState } from "react";

function App() {
  const [items, setItems] = useState([]);
  const [inpuText, setInpuText] = useState("");

  function handleChenge(event) {
    const newValue = event.target.value;

    setInpuText(newValue);
  }
  const handleAdd = () => {
    setItems((preValue) => [...preValue, inpuText]);
    setInpuText("");
  };

  function handleDel(event) {
    return event.target.remove();
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input
          onChange={handleChenge}
          type="text"
          name="item"
          value={inpuText}
        />
        <button onClick={handleAdd}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((item) => (
            <li key={item} onClick={handleDel}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
