import { RotatingLines } from 'react-loader-spinner';
import { Wrepper } from './Spinner.styled';

export const Spinner = () => {
  return (
    <Wrepper>
      <RotatingLines
        strokeColor="grey"
        strokeWidth="5"
        animationDuration="0.75"
        width="20%"
        visible={true}
      />
    </Wrepper>
  );
};
