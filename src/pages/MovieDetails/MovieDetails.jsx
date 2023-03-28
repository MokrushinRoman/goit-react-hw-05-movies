import { Suspense, useEffect, useRef, useState } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import { getMovieById, IMG_ORIGIN } from 'services';
import {
  ErrorFetch,
  MovieCard,
  MovieCardSkeleton,
  AdditionalInformation,
  BackButton,
} from 'components';
import posterSkeleton from 'images/posterSkeleton.png';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const location = useLocation();
  const backLinkHref = useRef(location.state?.from ?? '/');

  useEffect(() => {
    const abortController = new AbortController();
    setIsLoading(true);
    setMovieDetails([]);
    setError(null);

    const timeoutId = setTimeout(() => {
      async function getMovie() {
        try {
          const getMovieDetails = await getMovieById(movieId, abortController);
          setMovieDetails(getMovieDetails);
        } catch (error) {
          if (error.message === 'canceled') {
            return;
          }
          setError(error);
        } finally {
          clearTimeout(timeoutId);
          setIsLoading(false);
        }
      }

      getMovie();
    }, 2000);

    return () => abortController.abort();
  }, [movieId]);

  const { title, genres, overview, poster_path, vote_average, release_date } =
    movieDetails;
  const movieGenres =
    genres?.length > 0
      ? genres.map(({ name }) => name).join(', ')
      : 'No genres';
  const movieRating = vote_average ? Math.round(vote_average * 10) : 'No value';
  const releaseYear = new Date(release_date).getFullYear();
  const imageToRender = poster_path
    ? `${IMG_ORIGIN}${movieDetails.poster_path}`
    : posterSkeleton;
  const movieOverview = overview ?? 'No overview';

  return (
    <main>
      {/* <Link to={backLinkHref.current}>Go back</Link> */}
      <BackButton backPath={backLinkHref.current}>Go back</BackButton>
      {isLoading && <MovieCardSkeleton />}
      {error && <ErrorFetch />}

      {title && (
        <>
          <MovieCard
            movieData={{
              movieGenres,
              movieOverview,
              movieRating,
              releaseYear,
              title,
              imageToRender,
            }}
          />

          <AdditionalInformation />
          <Suspense fallback={null}>
            <Outlet />
          </Suspense>
        </>
      )}
    </main>
  );
};

export default MovieDetails;
