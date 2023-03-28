import { Wrapper } from './ErrorFetch.styled';

export const ErrorFetch = () => {
  return (
    <Wrapper>
      <h1 className="visually-hidden">Error notification </h1>
      <b>404!</b>
      <p>Something went wrong... Please try again later</p>
    </Wrapper>
  );
};
