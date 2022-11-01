import logo from "./logo.svg";
import "./App.css";
import GetData from "./Components/getData";
import React from "react";

function App() {
  const [ movie, setMovie ] = React.useState();

  const toggleMovie = (event) => {
   setMovie(event.target.value);
  }

  return (
    <div>
      <div style={{margin: '50px auto',justifyContent: 'center',alignItems: 'center', display: 'flex'}}>
        <input style={{padding : '5px 25px'}} onChange={toggleMovie} placeholder='enter movie name' value={movie}/> 
      </div>
      <GetData data={movie}/>
    </div>
  );
}

export default App;
