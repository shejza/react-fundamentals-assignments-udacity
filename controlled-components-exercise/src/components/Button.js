import React from "react";
const Button = ({ isDisabled, text, handleClick }) => {
  return (
    <React.Fragment>
      <button onClick={handleClick} disabled={isDisabled}>
        {text}
      </button>
    </React.Fragment>
  );
};
export default Button;
