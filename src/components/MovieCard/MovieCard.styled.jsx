import styled from '@emotion/styled';

export const Image = styled.img`
  max-width: 300px;
  height: auto;
  object-fit: contain;
`;

export const DescriptionList = styled.ul`
  display: flex;
  min-width: 200px;
  flex-direction: column;
  padding: 20px;
`;

export const DescriptionItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-grow: 1;
  margin-top: 20px;
  list-style: none;

  p {
    margin-top: 15px;
  }
`;
