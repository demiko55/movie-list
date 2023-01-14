import React from 'react';

var Movie = (props) =>{
  const [text, setText] = React.useState('To watch');
  var handleText = () => {
    if(text === 'To watch') {
      setText('Watched');
      props.movie['isWatched'] = 1;
    } else {
      setText('To watch');
      props.movie['isWatched'] = 0;
    }
  };
  return (
    <div className = 'movie'>{props.movie.title}
    <button onClick={handleText}>{text}</button>
    </div>
  );

};

export default Movie;