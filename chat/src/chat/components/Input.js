import React, { useState } from "react";

const Input = ({ messages, onSendMsg, user}) => {
  
  const [value, setValue] = useState('')
  const handleChange = (event) => {
    setValue(event.target.value)
  }
  const handleSend = (event) => {
     event.preventDefault();
     onSendMsg(value, user);
  }
  
  
  console.log(messages)
  return (
    <React.Fragment>
     <div>
        <form className="input-group">
          <input type="text" className="form-control"  onChange={handleChange} placeholder="Enter your message..." />
          <div className="input-group-append">
            <button className="btn submit-button" onClick={handleSend}>
              SEND
            </button>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
};

export default Input;
