import React, { useState } from "react";
import "./App.css";
import Form from "./Form";
import Button from "./components/Button";
import Header from "./components/Header";
import List from "./List";

const Main = () => {
  const [value, setValue] = useState("");
  const [items, setItems] = useState([]);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const addItem = (event) => {
    event.preventDefault();
    setItems([...items, value]);
  };

  const deleteLastItem = (event) => {
    setItems(items.slice(0, -1));
  };

  const inputIsEmpty = () => {
    return value === "";
  };

  const noItemsFound = () => {
    return items.length === 0;
  };

  return (
    <React.Fragment>
      <Header />
      <h2>Shopping List</h2>
      <Form
        value={value}
        handleChange={handleChange}
        addItem={addItem}
        inputIsEmpty={inputIsEmpty}
      />
      <Button
        handleClick={deleteLastItem}
        isDisabled={noItemsFound()}
        text={"Delete Last Item"}
      />

      <p className="items">Items</p>
      <List items={items} />
    </React.Fragment>
  );
};

export default Main;
