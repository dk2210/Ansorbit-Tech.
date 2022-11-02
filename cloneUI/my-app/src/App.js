import logo from './logo.svg';
import './App.css';
import Top  from './Components/top';
import Navbar from './Components/navbar';
import Middle from './Components/middle';
import Bottom from './Components/bottom'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Top />
      <Middle/>
      <Bottom /> 
    </div>
  );
}

export default App;
