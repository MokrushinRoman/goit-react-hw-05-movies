import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Button = styled(Link)`
  padding: 10px 20px;
  border-radius: 10px;
  display: inline-block;
  margin-bottom: 30px;
  border: 1px solid #928989;

  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

  &:hover,
  &:focus {
    box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
      0 17px 50px 0 rgba(0, 0, 0, 0.19);
  }
`;
