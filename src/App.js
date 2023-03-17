import './App.css';
import Main from './Components/Main';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="Octocat.png" className="App-logo" alt="logo" />
        <p>
          GitHub Codespaces <span className="heart">♥️♥️</span> React
        </p>
       <Main/>
      </header>
    </div>
  );
}

export default App;
