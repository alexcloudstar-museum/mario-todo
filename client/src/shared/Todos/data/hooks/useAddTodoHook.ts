import React from 'react';
import { useTodoContext } from '../context/TodoContext';
import { useTodosContext } from '../context/TodosContext';

export const useAddTodoHook = () => {
  const { todo, tempTodo, setTodo, setTempTodo } = useTodoContext();
  const { todos, setTodos } = useTodosContext();

  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    setTodo(e.currentTarget.value);
  };

  const onBtnSubmit = () => {
    setTempTodo(todo);
    setTodos(todos.concat(todo));
    setTodo('');
  };

  const onBtnCancel = () => {
    setTodo('');
  };

  return {
    onChange,
    onBtnSubmit,
    onBtnCancel,
  };
};
