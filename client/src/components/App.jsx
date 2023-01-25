import React, {useEffect, useState} from 'react';
import MoviesList from './MoviesList.jsx'
import Search from './Search.jsx'
import AddMovie from './AddMovie.jsx'
import Watched from './Watched.jsx'
import axios from 'axios';

const App = (props) => {
  const testmovies = [
    {title: 'Mean Girls'},
    {title: 'Hackers'},
    {title: 'The Grey'},
    {title: 'Sunshine'},
    {title: 'Ex Machina'}
  ];
  testmovies.forEach(movie=>{
    movie.isWatched = 0;
  })

  const [movies,setMovies] = useState([]);//whole movies
  const [display, setDisplay] = useState(testmovies); // it is the display movies.
  const [searchValue,setSearchValue] = useState('');
  const [newMovieTitle, setNewMovieTitle] = useState('');

  const [watch, setWatch] = useState('To watch');

  //var axios = require('axios');
  const API_URL = 'http://localhost:3000/api';//when run the client, you must visit localhost, can't be 127.0.0.1, or will be blocked by CROS
  //axios.get must be wrapped by a funtion, then useEffect to invoke that function, or it will repeatly called(don't know why)
  const getServerData = ()=>{
    axios.get(`${API_URL}/movies`)
    .then(res=>{
      console.log('data from server', res);
      setMovies(res.data);
      setDisplay(res.data);
    })
    .catch(err=>{
      console.log('get data err from server: '+ err.message);
    });
  }

  useEffect(()=> getServerData(),[]);//make sure axios.get only execute once.


  var handleWatchedMovies = ()=>{
    let watchedMovies = [];
    movies.forEach(movie=>{
      if(movie.isWatched){
        watchedMovies.push(movie);
      }
    });
    console.log('watchedMovies', watchedMovies);
    setDisplay(watchedMovies);
  };

  var handleToWatchMovies = ()=>{
    let toWatchMovies = [];
    movies.forEach(movie=>{
      if(movie.isWatched === 0){
        toWatchMovies.push(movie);
      }
    });
    console.log('to watch Movies', toWatchMovies);
    setDisplay(toWatchMovies);
  }


  var handlerSearch = ()=>{
    let list = [];
    movies.forEach((movie)=>{
      var v = new RegExp(searchValue);
      if(movie.title.indexOf(searchValue)!== -1 || v.test(movie.title)) {
        list.push(movie);
      }
    });
    setDisplay(list);
  };
  var handlerValue = (e) => {
    var query = e.target.value;
    setSearchValue(query);
  };

  var handlerAdd = () => {
    var tempMoive = {};
    tempMoive.title = newMovieTitle;
    tempMoive.isWatched = 0;
    var temp = [];
    temp.push(tempMoive);

    axios.post(`${API_URL}/movie`, tempMoive)
    .then((data)=>{
      setDisplay(temp);
      setMovies(movies.concat(temp));
      //or can we just call the getServerData() here?
      console.log('data after post from server', data);
    })
    .catch((err)=>{
      throw err;
    });
    console.log('movies after add', movies);
  };
  var handlerNewMovie = (e) => {
    var newMovieTitle = e.target.value;
    setNewMovieTitle(newMovieTitle);
  };



  return (
    <div>
      <h2>MoiveList</h2>
      <div className = "addMovie">
        <AddMovie handlerAdd = {handlerAdd} handlerNewMovie = {handlerNewMovie} />
      </div>
      <div>
      <span className = "toggleWatched">
        <Watched handleWatchedMovies={handleWatchedMovies} handleToWatchMovies={handleToWatchMovies}/>
      </span>
      <span className = "searchBar">
        <Search handlerSearch = {handlerSearch} handlerValue = {handlerValue}/>
      </span>
      </div>
      <div className = "movies">
        <MoviesList  movies = {display}/>
      </div>
    </div>

  );
};

export default App;