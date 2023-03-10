import './App.css';
import Keygen from './components/Keygen';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="Octocat.png" className="App-logo" alt="logo" />
        <div className='position-relative'>
        <h1>OpenPasswd🔐</h1>
        <span className='by'>By <a href='https://github.com/kaiopiola'>Kaio Piola</a></span>
        </div>
        <p className='subtitle'>Now using <a href="https://www.npmjs.com/package/keygen-package" target="_blank">keygen-package</a>!</p>
        <p className='star'><a href="https://github.com/kaiopiola/OpenPasswd" target="_blank">⭐ this on GitHub!</a></p>
        <Keygen/>
      </header>
    </div>
  );
}

export default App;
