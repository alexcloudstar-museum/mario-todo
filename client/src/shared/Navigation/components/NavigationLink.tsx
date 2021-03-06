import React from 'react';
import { NavigationProps } from './type';
import { StyledNavigationLink } from './style';

const NavigationLink: React.FC<NavigationProps> = ({ children }) => (
  <StyledNavigationLink>{children}</StyledNavigationLink>
);

export default NavigationLink;
