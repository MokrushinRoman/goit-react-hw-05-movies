import styled from '@emotion/styled';

export const AdditionalInfo = styled.section`
  padding: 20px 0;
  margin-bottom: 20px;
  border-top: 1px solid #333333;
  border-bottom: 1px solid #333333;

  h2 {
    margin-bottom: 15px;
  }
`;

export const InfoList = styled.ul``;

export const InfoItem = styled.li`
  & + li {
    margin-top: 10px;
  }
`;
