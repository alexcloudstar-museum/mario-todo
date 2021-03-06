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

  const onBtnSubmit = () => {
    setTodos(todos.concat(todo));
    setTodo('');
  };

  const onBtnCancel = () => {
    setTodo('');
  };

  return (
    <AddTodoWrapper>
      <Input
        onChange={e => onChange(e)}
        type='text'
        placeholder='New Todo'
        value={todo}
      />
      <Button onClick={onBtnSubmit}>
        <i className='fas fa-check fa-2x'></i>
      </Button>
      <Button onClick={onBtnCancel}>
        <i className='fas fa-times fa-2x'></i>
      </Button>
    </AddTodoWrapper>
  );
};

export default AddTodo;
