import PropTypes from 'prop-types';
import { List, Link } from './MovieList.styled';

export const MovieList = ({ movies, location }) => {
  return (
    <List>
      {movies.map(({ id, title }) => (
        <li key={id}>
          <Link to={`/movies/${id}`} state={location}>
            {title}
          </Link>
        </li>
      ))}
    </List>
  );
};

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
  location: PropTypes.object.isRequired,
};
