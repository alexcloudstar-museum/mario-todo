import React from 'react';
import { InputProps } from '../types/types';

import { StyledInput } from './style';

const Input: React.FC<InputProps> = ({ placeholder, value, onChange }) => {
  return (
    <StyledInput placeholder={placeholder} value={value} onChange={onChange} />
  );
};

export default Input;
