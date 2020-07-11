import React from 'react';
import dashboardlogo from '../../assets/dashboardlogo.svg';

import { Container } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <img alt="HeaderLogo" src={dashboardlogo} />
    </Container>
  );
};

export default Header;
