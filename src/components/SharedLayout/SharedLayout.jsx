import { Outlet } from 'react-router-dom';
import { GlobalStyle } from 'components';
import { Container, Header, Link, Logo } from './SharedLayout.styled';

export const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <Logo>
          <span role="img" aria-label="camera icon">
            🎥
          </span>
          HDRezka
        </Logo>
        <nav>
          <Link to="/" end>
            Home
          </Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </Header>
      <Outlet />
      <GlobalStyle />
    </Container>
  );
};
