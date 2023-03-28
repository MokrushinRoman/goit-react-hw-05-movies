import styled from '@emotion/styled';

export const EmptyCast = styled.span`
  text-align: center;
  padding: 20px 0;
  font-size: 40px;
`;

export const List = styled.ul`
  padding: 10px 0;
  display: inline-block;
`;

export const Item = styled.li`
  border: 1px solid #333333;
  border-radius: 5px;
  padding: 10px;
  width: 250px;

  & + li {
    margin-top: 25px;
  }

  img {
    display: inline-block;
    width: 100px;
    height: auto;
    object-fit: cover;
  }

  p {
    margin-top: 15px;
  }
`;
