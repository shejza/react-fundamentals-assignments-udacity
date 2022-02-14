import React from "react";
const Input = ({ value, handleChange }) => {
  return (
    <React.Fragment>
      <input
        type="text"
        placeholder="Enter New Item"
        value={value}
        onChange={handleChange}
      />
    </React.Fragment>
  );
};
export default Input;
