import './App.css';
import Keygen from './components/Keygen';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="Octocat.png" className="App-logo" alt="logo" />
        <h1>OpenPasswd🔐</h1>
        <Keygen/>
      </header>
    </div>
  );
}

export default App;
