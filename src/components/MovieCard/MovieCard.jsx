import PropTypes from 'prop-types';
import { DescriptionItem, DescriptionList, Image } from './MovieCard.styled';

export const MovieCard = ({
  movieData: {
    movieGenres,
    movieOverview,
    movieRating,
    releaseYear,
    title,
    imageToRender,
  },
}) => {
  return (
    <section style={{ display: 'flex', marginBottom: '10px' }}>
      <Image src={imageToRender} alt={title} />
      <DescriptionList>
        <DescriptionItem>
          <h2>{`${title} (${releaseYear})`}</h2>
          <p>{`User score: ${movieRating}%`}</p>
        </DescriptionItem>
        <DescriptionItem>
          <b>Overview</b>
          <p>{movieOverview}</p>
        </DescriptionItem>
        <DescriptionItem>
          <b>Genres</b>
          <p>{movieGenres}</p>
        </DescriptionItem>
      </DescriptionList>
    </section>
  );
};

MovieCard.propTypes = {
  movieData: PropTypes.exact({
    movieGenres: PropTypes.string,
    movieOverview: PropTypes.string,
    title: PropTypes.string,
    imageToRender: PropTypes.string,
    movieRating: PropTypes.number,
    releaseYear: PropTypes.number,
  }).isRequired,
};
