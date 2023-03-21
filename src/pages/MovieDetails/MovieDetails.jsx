import { Suspense, useEffect, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { getMovieById, IMG_ORIGIN } from 'services';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState({});
  // const [error, setError] = useState(null);
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  useEffect(() => {
    const abortController = new AbortController();

    async function getMovie() {
      try {
        const getMovieDetails = await getMovieById(movieId, abortController);
        setMovieDetails(getMovieDetails);
      } catch (error) {
        if (error.message === 'canceled') {
          return;
        }
        // setError(error);
      }
    }

    getMovie();

    return () => abortController.abort();
  }, [movieId]);

  if (!movieDetails) {
    return;
  }

  // const { title, genres, overview, poster_path, vote_average, release_date } =
  //   movieDetails;

  console.log('poster_path:  ', movieDetails.poster_path);

  return (
    <main>
      <Link to={backLinkHref}>Go back</Link>
      <img
        src={`${IMG_ORIGIN}${movieDetails.poster_path}`}
        alt=""
        width="200"
        height="200"
        styles="display: block"
      />

      <ul>
        <li>
          <Link to="cast" state={{ from: location.state.from }}>
            Cast
          </Link>
        </li>
        <li>
          <Link to="reviews" state={{ from: location.state.from }}>
            Reviews
          </Link>
        </li>
      </ul>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </main>
  );
};

export default MovieDetails;
