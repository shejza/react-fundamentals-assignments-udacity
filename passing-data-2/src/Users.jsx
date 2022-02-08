import React, { Component } from 'react'

class Users extends Component {
  render() {
   const { movieId, profiles, users } = this.props;
    const filteredProfiles = profiles.filter(profile => Number(profile.favoriteMovieID) === movieId)

    if(!filteredProfiles || filteredProfiles.length === 0) {
      return <p>None of the current users liked this movie</p>;
    }
  
    return (
       <div>
        <p>Liked By:</p>
       <ul>
         {filteredProfiles.map((profile) => (
         <li key={profile.id}>{users[profile.userID].name}</li>
         ))
          }
       </ul>
      </div>
    )
  }
}

export default Users