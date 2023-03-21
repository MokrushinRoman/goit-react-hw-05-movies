import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'services';

export const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  // const [error, setError] = useState(null);

  useEffect(() => {
    const abortController = new AbortController();

    async function getRevieews() {
      try {
        const { results } = await getMovieReviews(movieId, abortController);
        setReviews([...results]);
      } catch (error) {
        if (error.message === 'canceled') {
          return;
        }
        // setError(error);
      }
    }
    getRevieews();

    return () => abortController.abort();
  }, [movieId]);

  return (
    <ul>
      {reviews.map(({ id, content, author }) => (
        <li key={id}>
          <b>{`Author: ${author}`}</b>
          <p>{content}</p>
        </li>
      ))}
    </ul>
  );
};

export default Reviews;
