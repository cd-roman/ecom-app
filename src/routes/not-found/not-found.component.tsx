import { useNavigate } from 'react-router-dom';

import Button from '../../components/button/button.component';
import { NotFoundContainer, NotFoundTitle, NotFoundSubtitle, NotFoundText } from './not-found.styles';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <NotFoundContainer>
      <NotFoundTitle>404</NotFoundTitle>
      <NotFoundSubtitle>Oops! Page not found</NotFoundSubtitle>
      <NotFoundText>
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </NotFoundText>
      <Button onClick={() => navigate('/')}>Go to Homepage</Button>
    </NotFoundContainer>
  );
};

export default NotFound;
