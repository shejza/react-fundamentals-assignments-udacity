import React, { useState } from "react";
import Chat from "./chat/Chat";

const Main = () => {
 const [users, setUsers] = useState([{ username: 'Amy' }, { username: 'John' }]);

 const [ messages, setMessages ] = useState([
    { username: 'Amy', text: 'Hi, Jon!' },
    { username: 'Amy', text: 'How are you?' },
    { username: 'John', text: 'Hi, Amy! Good, you?' }
  ])
  
 const onSendMsg = (msg, user) => {
   const message = {username: user, text: msg}
   const _messages = [...messages, message ]
   setMessages(_messages)
 }

  return (
    <React.Fragment>
      <h2>Exercise 2 Chat</h2>
      <div className="container">
        <Chat users={users} messages={messages} user={users[0].username} onSendMsg={onSendMsg}/>
        <Chat users={users} messages={messages} user={users[1].username} onSendMsg={onSendMsg}/>
      </div>
    </React.Fragment>
  );
};

export default Main;
