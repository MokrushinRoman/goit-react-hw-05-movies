import { useEffect, useState } from 'react';
import SearchForm from 'components/SearchForm/SearchForm';
import { useLocation, useSearchParams } from 'react-router-dom';
import { getMoviesByQuery } from 'services';
import { MovieList, ErrorFetch, NothingWasFound, Spinner } from 'components';
import { errorToast } from 'helpers';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const query = searchParams.get('movies') ?? '';
    const abortController = new AbortController();

    if (!query) {
      return;
    }

    async function getMovies() {
      setIsLoading(true);
      try {
        const { results } = await getMoviesByQuery(query, abortController);
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
  }, [searchParams]);

  const handleSubmit = query => {
    if (searchParams.get('movies') === query) {
      return errorToast('You enter the same value!');
    }
    setSearchParams({ movies: query });
    setMovies([]);
    setError(null);
  };

  return (
    <main>
      <SearchForm submit={handleSubmit} />
      {isLoading && <Spinner />}
      {status === 'empty' && <NothingWasFound />}
      {status === 'resolved' && (
        <MovieList movies={movies} location={{ from: location }} />
      )}

      {error && <ErrorFetch />}
    </main>
  );
};

export default Movies;
