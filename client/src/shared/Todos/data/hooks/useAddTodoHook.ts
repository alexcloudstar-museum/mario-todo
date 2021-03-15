import React from 'react';
import { useTodoContext } from '../context/TodoContext';
import { useTodosContext } from '../context/TodosContext';

export const useAddTodoHook = () => {
  const { todo, tempTodo, setTodo, setTempTodo } = useTodoContext();
  const { todos, setTodos } = useTodosContext();

  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    setTodo({
      id: Math.floor(Math.random() * 11).toString(),
      name: e.currentTarget.value,
    });
  };

  const onBtnSubmit = () => {
    setTodos(todos.concat({ id: todo.id, name: todo.name }));
    setTempTodo({ id: todo.id, name: todo.name });
    setTodo({ name: '' });
  };

  const onBtnCancel = () => {
    setTodo({ name: '' });
  };

  return {
    onChange,
    onBtnSubmit,
    onBtnCancel,
  };
};