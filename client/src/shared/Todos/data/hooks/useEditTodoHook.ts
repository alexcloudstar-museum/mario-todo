import { useState } from 'react';
import { useButtonContext } from '../../../FormElements/data/context/ButtonContext';
import { useTodoContext } from '../context/TodoContext';
import { useTodosContext } from '../context/TodosContext';

export const useEditTodoHook = () => {
  const { todo, tempTodo, setTempTodo } = useTodoContext();
  const { todos, setTodos } = useTodosContext();
  const { disabled, setDisabled } = useButtonContext();

  const onChange = e => {
    setTempTodo(e.target.value);
  };

  const onBtnSubmit = () => {
    const updatedTodos = [...todos];
    const updatedTodoIndex = todos.findIndex(editedTodo => editedTodo === todo);
    updatedTodos[updatedTodoIndex] = tempTodo;
    setTodos(updatedTodos);
    setDisabled(true);
  };

  const onDeleteTodo = () => {
    const updatedTodos = todos.filter(updatedTodo => updatedTodo !== todo);
    setTodos(updatedTodos);
    // TODO:
    // do the API call to remove the todo from db
  };

  return {
    tempTodo,
    onChange,
    onBtnSubmit,
    onDeleteTodo,
  };
};
