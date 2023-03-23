import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
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
          Learn React
        </a>
      </header>
    </div>
  );
}

function TestImage() {
  return (
    <div>
      <img src="https://derpicdn.net/img/view/2023/2/14/3046052.png" alt="test"/>
    </div>
  )
}

export default App;
