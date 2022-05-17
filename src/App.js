import { BrowserRouter, Routes, Route } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';
import Board from './pages/Board/Board';
import Backlog from './pages/Backlog/Backlog';
import Header from './components/Header/Header';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

const AppWrapper = styled.div`
  text-align: center;
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <AppWrapper>
          <Header />
          <Routes>
            <Route path="/" element={<Board />} />
            <Route path="/backlog" element={<Backlog />} />
          </Routes>
        </AppWrapper>
      </BrowserRouter>
    </>
  );
}

export default App;
