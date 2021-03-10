import React from 'react';
import { InputProps } from '../types/types';

import { StyledInput } from './style';

const Input: React.FC<InputProps> = ({
  placeholder,
  value,
  disabled,
  ...rest
}) => {
  return (
    <StyledInput
      placeholder={placeholder}
      value={value || ''}
      disabled={disabled}
      {...rest}
    />
  );
};

export default Input;
