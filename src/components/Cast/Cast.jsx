import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { getMovieCredits } from 'services';

const Cast = () => {
  const { movieId } = useParams();
  const location = useLocation();
  const [cast, setCast] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortController = new AbortController();

    async function getRevieews() {
      try {
        const { cast } = await getMovieCredits(movieId, abortController);
        setCast([...cast]);
      } catch (error) {
        if (error.message === 'canceled') {
          return;
        }
        setError(error);
      }
    }
    getRevieews();

    return () => abortController.abort();
  }, [movieId]);

  return (
    <ul>
      {cast.map(({ id, name, character, profile_path }) => (
        <li key={id}>
          <img src={profile_path} alt={name} />
          <p>{name}</p>
          <p>{`Character: ${character}`}</p>
        </li>
      ))}
    </ul>
  );
};

export default Cast;
