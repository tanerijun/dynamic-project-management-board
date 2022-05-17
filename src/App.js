import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Board from './pages/Board/Board';
import Backlog from './pages/Backlog/Backlog';
import Header from './components/Header/Header';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Board />} />
          <Route path="/backlog" element={<Backlog />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
