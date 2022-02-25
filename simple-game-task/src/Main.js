import React, { useState } from "react";
import Form from "./form/Form";
import UsersList from "./users/UsersList";

const Main = () => {

const [ users, setUsers ] = useState([])


  const addUser = user => {
    setUsers( [...users, user]);
  };

  return (
    <React.Fragment>
    <h2>Simple Video Game Site</h2>
      <Form addUser={addUser} users={users}/>
      <UsersList users={users}/>
    </React.Fragment>
  );
};

export default Main;
