import React from 'react';
import { AddTodo } from './types';

import { Input } from '../FormElements';

const AddTodo: React.FC<AddTodo> = () => {
  return <Input type='text' placeholder='New Todo' value={null} />;
};

export default AddTodo;
