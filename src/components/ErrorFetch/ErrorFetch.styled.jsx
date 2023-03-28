import styled from '@emotion/styled';

export const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;

  b {
    font-size: 50px;
  }

  p {
    font-size: 25px;
  }
`;
