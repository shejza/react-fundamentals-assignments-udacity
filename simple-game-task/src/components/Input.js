import React from "react";
const Input = ({ value, name, handleChange, placeholder }) => {
  return (
    <React.Fragment>
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        name={name}
        onChange={handleChange}
      />
    </React.Fragment>
  );
};
export default Input;
