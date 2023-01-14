import React from 'react';

var Search = ({handlerSearch, handlerValue, tip})=>(
  <span>
    <input onChange={handlerValue} type = "text"></input>
    <button onClick={handlerSearch} >
      <span>Go!</span>
    </button>
  </span>


);
export default Search;