import React from 'react';
import { NavigationProps } from '../types/type';
import { StyledNavigationLink } from './style';

import { NavLink } from 'react-router-dom';

const NavigationLink: React.FC<NavigationProps> = ({ children, to }) => (
  <StyledNavigationLink>
    <NavLink to={to}>{children}</NavLink>
  </StyledNavigationLink>
);

export default NavigationLink;
