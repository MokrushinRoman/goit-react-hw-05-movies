import styled from '@emotion/styled';

export const EmptyReviews = styled.span`
  text-align: center;
  padding: 20px 0;
  font-size: 40px;
`;

export const List = styled.ul`
  padding: 10px 0;

  li {
    border: 1px solid #333333;
    border-radius: 5px;
    padding: 10px;
    
  }

  li + li {
    margin-top: 25px;
  }

  b {
    font-size: 20px;
    margin-bottom: 10px;
  }
`;
