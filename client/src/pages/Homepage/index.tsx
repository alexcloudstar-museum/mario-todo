import React from 'react';
import { HomepageWrapper } from './style';

import { Container, Todos } from '../../components';

const Homepage = () => {
  return (
    <HomepageWrapper>
      <Todos />
    </HomepageWrapper>
  );
};

export default Homepage;
