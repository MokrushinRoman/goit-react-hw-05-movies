import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'services';
import { EmptyReviews, List } from './Reviews.styled';
import { ErrorFetch, Spinner } from 'components';

export const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortController = new AbortController();

    async function getRevieews() {
      setError(null);
      setIsLoading(true);
      try {
        const { results } = await getMovieReviews(movieId, abortController);
        setReviews([...results]);
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
      {reviews.length > 0 ? (
        <List>
          {reviews.map(({ id, content, author }) => (
            <li key={id}>
              <b>{`Author: ${author}`}</b>
              <p>{content}</p>
            </li>
          ))}
        </List>
      ) : (
        <EmptyReviews>No reviews</EmptyReviews>
      )}
    </>
  );
};

export default Reviews;
