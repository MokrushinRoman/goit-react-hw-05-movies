import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCredits } from 'services';
import { EmptyCast, Item, List } from './Cast.styled';
import { IMG_ORIGIN } from 'services';
import posterSkeleton from 'images/posterSkeleton.png';
import { ErrorFetch, Spinner } from 'components';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const abortController = new AbortController();

    async function getRevieews() {
      setIsLoading(true);
      setError(null);
      try {
        const { cast } = await getMovieCredits(movieId, abortController);
        setCast([...cast]);
      } catch (error) {
        if (error.message === 'canceled') {
          return;
        }
        setError(error);
      } finally {
        setIsLoading(false);
      }
    }
    getRevieews();

    return () => abortController.abort();
  }, [movieId]);

  return (
    <>
      {error && <ErrorFetch />}
      {isLoading && <Spinner />}
      {cast.length > 0 ? (
        <List>
          {cast.map(({ id, name, character, profile_path }) => (
            <Item key={id}>
              <img
                src={
                  profile_path ? `${IMG_ORIGIN}${profile_path}` : posterSkeleton
                }
                alt={name}
              />
              <p>{name}</p>
              <p>{`Character: ${character}`}</p>
            </Item>
          ))}
        </List>
      ) : (
        <EmptyCast>No information</EmptyCast>
      )}
    </>
  );
};

export default Cast;
