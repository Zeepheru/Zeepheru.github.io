import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App" >
      <header className="App-header">
        <h1>TEXT</h1>
        <TestImage />
        <p>
          bleh
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
      </header>
      <div>

      </div>
    </div>
  );
}

function TestImage() {
  return (
    <div>
      <div>
        <img src="/misc/SMPTE_Color_Bars.svg.png" alt="test"/>
      </div>
    </div>
  )
}

export default App;
