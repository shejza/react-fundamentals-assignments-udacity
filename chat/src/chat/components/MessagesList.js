import React from "react";

const MessagesList = ({ users, messages }) => {
  return (
    <React.Fragment>
        <ul className="message-list">
          {messages.map((message, index) => (
            <li
              key={index}
              className={
                message.username === users[0].username ? 'message sender' : 'message recipient'
              }
            >
              <p>{`${message.username}: ${message.text}`}</p>
            </li>
          ))}
        </ul>
    </React.Fragment>
  );
};

export default MessagesList;
