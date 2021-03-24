import React from 'react';
import { NavigationProps } from '../types/type';
import { StyledNavigationLink } from './style';

import { Link } from 'react-router-dom';

const NavigationLink: React.FC<NavigationProps> = ({ children, to }) => (
  <StyledNavigationLink>
    <Link to={to}>{children}</Link>
  </StyledNavigationLink>
);

export default NavigationLink;
