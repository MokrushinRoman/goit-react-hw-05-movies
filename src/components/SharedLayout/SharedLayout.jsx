import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import GlobalStyle from 'components/GlobalStyle';
import { Container, Header, Link, Logo } from './SharedLayout.styled';

const SharedLayout = () => {
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
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <GlobalStyle />
    </Container>
  );
};

export default SharedLayout;
