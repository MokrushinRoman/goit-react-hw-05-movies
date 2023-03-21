import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { getPopularMovies } from 'services';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const abortController = new AbortController();

    async function getMovies() {
      setIsLoading(true);
      try {
        const { results } = await getPopularMovies(abortController);
        setMovies([...results]);
      } catch (error) {
        if (error.message === 'canceled') {
          return;
        }
        setError(error);
      } finally {
        setIsLoading(false);
      }
    }

    getMovies();

    return () => abortController.abort();
  }, []);

  return (
    <main>
      {error && (
        <div>
          <h2>404</h2>
          <span>Something went wrong...</span>
        </div>
      )}
      <ul>
        {movies.map(({ id, title }) => (
          <li key={id}>
            <NavLink to={`/movies/${id}`} state={{ from: location }}>
              {title}
            </NavLink>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Home;
