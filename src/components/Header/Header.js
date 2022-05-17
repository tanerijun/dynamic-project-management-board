import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeaderWrapper = styled.div`
  background-color: blue;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;

  h1 {
    height: 64px;
    pointer-events: none;
  }
`;

const NavigationContainer = styled.div`
  background: rgb(7, 7, 201);
  display: flex;
  justify-content: center;
  width: 100%;
  gap: 2rem;
  padding: 1rem;

  .link {
    color: white;
    text-decoration: none;
  }
`;

function Header() {
  return (
    <HeaderWrapper>
      <h1>Project Management Board</h1>
      <NavigationContainer>
        <Link className="link" to="/">
          Home
        </Link>
        <Link className="link" to="/backlog">
          Backlog
        </Link>
      </NavigationContainer>
    </HeaderWrapper>
  );
}

export default Header;
