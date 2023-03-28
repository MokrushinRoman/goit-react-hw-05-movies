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
