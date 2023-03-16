import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { getPopularMovies } from 'services';

export const Home = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
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
  }, []);

  return (
    <main>
      <ul>
        {movies.map(({ id, title }) => (
          <li key={id}>123</li>
        ))}
      </ul>
    </main>
  );
};
