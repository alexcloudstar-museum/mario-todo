import React from 'react';
import { ButtonProps } from '../types/types';

import { StyledButton } from './style';

const Input: React.FC<ButtonProps> = ({ children, onClick, ...rest }) => {
  return (
    <StyledButton show onClick={onClick} {...rest}>
      {children}
    </StyledButton>
  );
};

export default Input;
