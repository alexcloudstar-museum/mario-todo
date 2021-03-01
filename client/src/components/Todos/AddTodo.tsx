import React from 'react';
import { AddTodo } from './types';

import { Input } from '../FormElements';
import { AddTodoWrapper } from './style';

const AddTodo: React.FC<AddTodo> = () => {
  return (
    <AddTodoWrapper>
      <Input type='text' placeholder='New Todo' value={null} />
    </AddTodoWrapper>
  );
};

export default AddTodo;
