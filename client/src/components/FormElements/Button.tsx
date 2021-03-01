import React from 'react';
import { ButtonProps } from './types';

import { StyledButton } from './style';

const Input: React.FC<ButtonProps> = ({ children, onClick }) => {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
};

export default Input;
