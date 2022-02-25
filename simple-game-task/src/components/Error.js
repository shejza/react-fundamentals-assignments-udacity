import React from "react";
const Error = ({ text }) => {
  return (
    <React.Fragment>
     <span className='error'>{text}</span>
    </React.Fragment>
  );
};
export default Error;
