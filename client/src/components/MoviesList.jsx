import React from 'react';
import Movie from './Movie.jsx';

var MoviesList = (props) =>{
  console.log('movies in movielist', props.movies);
  if (props.movies.length === 0) {
    return (
      <div className = "movielist">
      'no movie by that name found'
      </div>
    );
  } else{
    return (
      <div className = "movielist">
      {props.movies.map((movie, index) =>
        <Movie movie={movie} key={index} />
      )}
      </div>
    );
  }
};


export default MoviesList;