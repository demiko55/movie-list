import React from 'react';
import Movie from './Movie.jsx';

var Watched = (props) => {

  return (
    <span>
      <button onClick={props.handleWatchedMovies}>Watched</button>
      <button onClick={props.handleToWatchMovies}>To Watch</button>
    </span>
  );

};

export default Watched;