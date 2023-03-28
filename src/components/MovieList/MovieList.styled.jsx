import styled from '@emotion/styled';
import { Link as RouterLink } from 'react-router-dom';

export const List = styled.ul`
  width: fit-content;
  margin: 50px auto;
  display: block;

  li + li {
    margin-top: 15px;
  }
`;

export const Link = styled(RouterLink)`
  max-width: 400px;
  word-break: break-word;
`;
