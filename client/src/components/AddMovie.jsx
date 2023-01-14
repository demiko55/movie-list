import React from 'react';

var AddMovie = ({handlerAdd, handlerNewMovie})=>(
  <div>
    <input onChange={handlerNewMovie} type = "text"></input>
    <button onClick={handlerAdd} >
      <span>Add</span>
    </button>
  </div>

);
export default AddMovie;