import styled from '@emotion/styled';

export const Wrepper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  &.loupe {
    width: 100%;
  }

  &.spinner {
    border-radius: 10px;
    min-width: 300px;
    height: 450px;
    background-color: #d9d9d9;
  }
`;
