import './App.css';
// import Game from './components/Game';
import Title from './components/Title';
import Grid from './components/Grid';

function App() {
  return (
    <div className="App">
      <Title />
      {/* <Game /> */}
      <Grid />
      <button>Start New Ga</button>
    </div>
  );
}

export default App;
