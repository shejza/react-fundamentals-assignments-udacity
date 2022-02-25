import React, { useState } from "react";

const User = ({ user }) => {
  const [hideGames, setHideGames] = useState(false)
  
  const toggleGame = () => {
    setHideGames(!hideGames)
  }

  return (
    <React.Fragment>
      <tr>
        <td >{user.username}</td>
         {!hideGames &&
           <td>played {user.games} games</td>
          }
        <td>
          <button onClick={toggleGame}>
            {!hideGames ? 'Hide the number of games' : 'Show the Number of Games Played'}
          </button>
        </td>
      </tr>
    </React.Fragment>
  );
};

export default User;
