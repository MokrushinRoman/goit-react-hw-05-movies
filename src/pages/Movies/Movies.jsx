import { useEffect, useState } from 'react';
import SearchForm from 'components/SearchForm/SearchForm';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { getMoviesByQuery } from 'services';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
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
    setSearchParams({ movies: query });
    setMovies([]);
    setError(null);
  };

  return (
    <main>
      <SearchForm submit={handleSubmit} />
      <ul>
        {movies.map(({ id, title }) => (
          <li key={id}>
            <Link to={`/movies/${id}`} state={{ from: location }}>
              {title}
            </Link>
          </li>
        ))}
      </ul>
      {isLoading && <div>Loading...</div>}
      {error && (
        <div>
          <h2>404</h2>
          <span>Something went wrong... Please try again later</span>
        </div>
      )}
    </main>
  );
};

export default Movies;
