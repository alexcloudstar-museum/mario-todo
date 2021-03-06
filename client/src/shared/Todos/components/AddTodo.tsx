import React from 'react';
import { AddTodo } from './types';

import { Button, Input } from '../../FormElements/components';
import { AddTodoWrapper } from './style';
import { useTodoContext } from '../data/context/TodoContext';
import { useTodosContext } from '../data/context/TodosContext';

const AddTodo: React.FC<AddTodo> = () => {
  const { todo, setTodo } = useTodoContext();
  const { todos, setTodos } = useTodosContext();

  const onChange = e => {
    setTodo(e.target.value);
  };

  return (
    <AddTodoWrapper>
      <Input
        onChange={onChange}
        type='text'
        placeholder='New Todo'
        value={todo}
      />
      <Button onClick={() => setTodos(todos.concat(todo))}>Add Todo</Button>
      <Button onClick={() => console.log('Canceled adding')}>Cancel</Button>
    </AddTodoWrapper>
  );
};

export default AddTodo;
