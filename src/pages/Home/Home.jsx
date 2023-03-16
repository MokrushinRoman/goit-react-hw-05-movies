import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { getPopularMovies } from 'services';

export const Home = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    if (movies.length > 0) {
      return;
    }
    setIsLoading(true);

    async function getMovies() {
      try {
        const { results } = await getPopularMovies();

        setMovies([...results]);
        console.log(results);
      } catch (error) {
      } finally {
        setIsLoading(false);
      }
    }

    getMovies();
  }, [movies]);

  return (
    <main>
      <ul>
        {!isLoading &&
          movies.map(({ id, title }) => (
            <li key={id}>
              <NavLink to={`movies/${id}`}>{title}</NavLink>
            </li>
          ))}
      </ul>
    </main>
  );
};
