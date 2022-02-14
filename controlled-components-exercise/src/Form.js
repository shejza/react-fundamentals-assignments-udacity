import React from "react";
import Input from "./components/Input";
import Button from "./components/Button";

const Form = ({ value, handleChange, addItem, inputIsEmpty }) => {
  return (
    <React.Fragment>
      <form onSubmit={addItem}>
        <Input value={value} handleChange={handleChange} />
        <Button isDisabled={inputIsEmpty()} text={"Add"} />
      </form>
    </React.Fragment>
  );
};

export default Form;
