import PropTypes from 'prop-types';
import { Button } from './BackButton.styled';

export const BackButton = ({ backPath }) => {
  return <Button to={backPath}>Go back</Button>;
};

BackButton.propTypes = {
  backPath: PropTypes.object.isRequired,
};
