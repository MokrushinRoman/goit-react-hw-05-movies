import { MagnifyingGlass, RotatingLines } from 'react-loader-spinner';
import { Wrepper } from './MovieCardSkeleton.styled';

export const MovieCardSkeleton = () => {
  return (
    <section style={{ display: 'flex', marginBottom: '10px' }}>
      <Wrepper className="spinner">
        <RotatingLines
          strokeColor="grey"
          strokeWidth="5"
          animationDuration="0.75"
          width="40%"
          visible={true}
        />
      </Wrepper>
      <Wrepper className="loupe">
        <MagnifyingGlass
          visible={true}
          height="50%"
          width="50%"
          ariaLabel="MagnifyingGlass-loading"
          wrapperStyle={{}}
          wrapperClass="MagnifyingGlass-wrapper"
          glassColor="#c0efff"
          color="#e15b64"
        />
      </Wrepper>
    </section>
  );
};
