import React from 'react';

const GetData = (props) => {

        const [ movieList, setMovieList ] = React.useState({});
        React.useEffect (() => {
        const getData = setTimeout(() => {
            fetch(`http://www.omdbapi.com/?apikey=ba363606&t=${props.data}`).then(res=>{return res.json()}).then(res => setMovieList(res)).catch((err)=>console.log("Hey : ",err));
        },1000)
        return () => clearTimeout(getData);
        },[props.data]);
        console.log(movieList);
  return (
    <>
    <div style={{margin: 'auto',justifyContent: 'center',alignItems: 'center', display: 'flex', flexDirection: 'column'}}>
        
         <div>
            <img  src={movieList.Poster} alt='Poster'/>
         </div>
         <h1>{movieList.Title}</h1>
         <h2>Cast : {movieList.Actors}</h2>
         <p>Year : {movieList.Year}</p>
         <h3>IMBD-Rating : {movieList.imdbRating}</h3>
    </div>
    </>
  );
}

export default GetData;
