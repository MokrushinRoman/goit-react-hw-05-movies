import { Link } from 'react-router-dom';
import { AdditionalInfo, InfoItem, InfoList } from './AdditionalInfo.styled';

export const AdditionalInformation = () => {
  return (
    <AdditionalInfo>
      <h2>Additional information</h2>
      <InfoList>
        <InfoItem>
          <Link to="cast">Cast</Link>
        </InfoItem>
        <InfoItem>
          <Link to="reviews">Reviews</Link>
        </InfoItem>
      </InfoList>
    </AdditionalInfo>
  );
};
