import React from 'react';
import { AddTodo } from './types';

import { Button, Input } from '../FormElements';
import { AddTodoWrapper } from './style';
import { useTodoContext } from '../../data/todo/context/TodoContext';
import { useTodosContext } from '../../data/todos/context/TodosContext';

const AddTodo: React.FC<AddTodo> = () => {
  const { todo, setTodo } = useTodoContext();
  const { todos, setTodos } = useTodosContext();

  console.log(todo);
  console.log(todos);

  return (
    <AddTodoWrapper>
      <Input
        onChange={(e: any) => setTodo(e.target.value)}
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
