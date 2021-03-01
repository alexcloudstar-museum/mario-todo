import React from 'react';
import { AddTodo } from './types';

import { Button, Input } from '../FormElements';
import { AddTodoWrapper } from './style';

const AddTodo: React.FC<AddTodo> = () => {
  return (
    <AddTodoWrapper>
      <Input
        onChange={(e: React.FormEvent) => console.log(e.target)}
        type='text'
        placeholder='New Todo'
        value=''
      />
      <Button onClick={() => console.log('I added the todo')}>Add Todo</Button>
      <Button onClick={() => console.log('Canceled adding')}>Cancel</Button>
    </AddTodoWrapper>
  );
};

export default AddTodo;
