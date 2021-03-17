import { useState } from 'react';
import { useButtonContext } from '../../../FormElements/data/context/ButtonContext';
import { useTodoContext } from '../context/TodoContext';
import { useTodosContext } from '../context/TodosContext';

import { findIndex, filter } from 'lodash';

export const useEditTodoHook = () => {
  const { todo, tempTodo } = useTodoContext();
  const { todos, setTodos } = useTodosContext();
  const { setDisabled } = useButtonContext();

  const [upTodo, setUpTodo] = useState({
    _id: tempTodo._id,
    todo: tempTodo.todo,
  });

  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    setUpTodo({ _id: todo._id, todo: e.currentTarget.value });
  };

  const blurEvent = () => {
    setDisabled(true);
  };

  const onBtnSubmit = () => {
    const updatedTodos = [...todos];

    const updatedTodoIndex = findIndex(
      updatedTodos,
      updatedTodo => updatedTodo._id === upTodo._id
    );

    updatedTodos[updatedTodoIndex] = upTodo;
    setTodos(updatedTodos);
    setDisabled(true);
  };

  const onDeleteTodo = (todoID: string) => {
    const updatedTodos = filter(
      todos,
      updatedTodo => updatedTodo._id !== todoID
    );
    setTodos(updatedTodos);

    // TODO:
    // do the API call to remove the todo from db
  };

  return {
    upTodo,
    blurEvent,
    onChange,
    onBtnSubmit,
    onDeleteTodo,
  };
};
