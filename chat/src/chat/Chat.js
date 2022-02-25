import React, { useState } from "react";
import MessagesList from "./components/MessagesList";
import Input from "./components/Input";

const Chat = ({ users, messages, user, onSendMsg }) => {
  return (
    <React.Fragment>
       <div className="chat-window">
            <h2>Super Awesome Chat</h2>
            <div className="name sender">{user}</div>
            <MessagesList messages={messages}  users={users} />
            <Input messages={messages} onSendMsg={onSendMsg} user={user}/>
        </div>
    </React.Fragment>
  );
};

export default Chat;
