import React from 'react';
import { InputProps } from './types';

import { StyledInput } from './style';

const Input: React.FC<InputProps> = ({ placeholder, value }) => {
  return <StyledInput placeholder={placeholder} value={value} />;
};

export default Input;
