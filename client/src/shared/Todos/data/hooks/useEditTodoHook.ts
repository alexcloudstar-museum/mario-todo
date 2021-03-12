import { useState } from 'react';
import { useButtonContext } from '../../../FormElements/data/context/ButtonContext';
import { useTodoContext } from '../context/TodoContext';
import { useTodosContext } from '../context/TodosContext';

export const useEditTodoHook = () => {
  const { todo, setTodo, tempTodo, setTempTodo } = useTodoContext();
  const { todos, setTodos } = useTodosContext();
  const { disabled, setDisabled } = useButtonContext();

  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    setTempTodo({ name: e.currentTarget.value });
  };

  const blurEvent = () => {
    setDisabled(true);
  };

  const onBtnSubmit = () => {
    const updatedTodos = [...todos];

    const updatedTodoIndex = updatedTodos.findIndex(
      updatedTodos => updatedTodos.id === tempTodo.id
    );

    updatedTodos[updatedTodoIndex] = tempTodo;
    setTodos(updatedTodos);
    setDisabled(true);
  };

  const onDeleteTodo = () => {
    const updatedTodos = todos.filter(
      updatedTodo => updatedTodo.id !== tempTodo.id
    );
    setTodos(updatedTodos);
    // TODO:
    // do the API call to remove the todo from db
  };

  return {
    blurEvent,
    onChange,
    onBtnSubmit,
    onDeleteTodo,
  };
};
