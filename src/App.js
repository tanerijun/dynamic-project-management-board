import './App.css';
import Board from './pages/Board/Board';
import Backlog from './pages/Backlog/Backlog';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Board />
      <Backlog />
    </div>
  );
}

export default App;
