import React, { Component } from 'react'
import Users from './Users';

class ListFavorite extends Component {
  render() {
    const { profiles, users, movies } = this.props;
    const moviesArray = Object.values(movies);
   
    return (
       <div>
        {
          moviesArray.map((movie) => (
            <div  key={movie.id}>
              <h2>{movie.name}</h2>
              <Users
                movieId={movie.id}
                users={users}
                profiles={profiles}
              />
            </div>
          ))
        }
      </div>
    )
  }
}

export default ListFavorite