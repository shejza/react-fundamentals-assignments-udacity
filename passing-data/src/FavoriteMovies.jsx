import React, { Component } from 'react'

class FavoriteMovies extends Component {
  render() {
    const { profiles, users, movies } = this.props;
    return (
      <ol className='contact-list'>
        {this.props.profiles.map((profile) => (
          <li key={profile.id} className='contact-list-item'>
            {users[profile.userID].name}  favorite movie is {' '}
            {users[profile.favoriteMovieID].name}
          </li>
        ))}
      </ol>
    )
  }
}

export default FavoriteMovies