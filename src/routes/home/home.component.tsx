import { Outlet, useNavigate } from 'react-router-dom';

import Directory from '../../components/directory/directory.component';

import Button from '../../components/button/button.component';

import { ButtonContainer } from './home.styles';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
        <Directory />  
          <ButtonContainer>
            <Button onClick={() => navigate('/shop')}>Shop Now</Button>
          </ButtonContainer>
        <Outlet />
    </div>   
  );
};

export default Home;