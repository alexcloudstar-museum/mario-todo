import React from 'react';
import { NavigationProps } from '../types/type';
import { StyledNavigationLinks } from './style';

const NavigationLinks: React.FC<NavigationProps> = ({ children }) => (
  <StyledNavigationLinks>{children}</StyledNavigationLinks>
);
export default NavigationLinks;
