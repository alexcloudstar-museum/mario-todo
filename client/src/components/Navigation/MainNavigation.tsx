import React from 'react';
import { NavigationProps } from './type';
import { StyledHeader } from './style';

const MainNavigation: React.FC<NavigationProps> = ({ children }) => (
  <StyledHeader>{children}</StyledHeader>
);
export default MainNavigation;
