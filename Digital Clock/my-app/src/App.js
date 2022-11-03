import logo from './logo.svg';
import './App.css';
import CurrentTime from './Clock/Clock'

function App() {
  return (
    <div style={{background: '#D3D3D3', padding: '20px'}} className="App">
     <CurrentTime />
    </div>
  );
}

export default App;
