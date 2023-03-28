import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { getPopularMovies } from 'services';
import { MovieList, ErrorFetch, NothingWasFound, Spinner } from 'components';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState(null);

  const location = useLocation();

  useEffect(() => {
    const abortController = new AbortController();

    async function getMovies() {
      setIsLoading(true);
      try {
        const { results } = await getPopularMovies(abortController);
        setMovies([...results]);
        if (results.length < 1) {
          setStatus('empty');
          return;
        }
        setStatus('resolved');
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
      {isLoading && <Spinner />}
      {error && <ErrorFetch />}
      {status === 'empty' && <NothingWasFound />}
      {status === 'resolved' && (
        <MovieList movies={movies} location={{ from: location }} />
      )}
    </main>
  );
};

export default Home;
