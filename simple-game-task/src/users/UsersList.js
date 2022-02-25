import React from "react";
import User from "./User";

const UsersList = ({ users }) => {

  return (
    <React.Fragment>
     <div>
      <h1>Users</h1>
       <table>
  
          {users.map((user, index) => (
            <User key={index} user={user} />
          ))}
        </table>
      </div>
    </React.Fragment>
  );
};

export default UsersList;
