import { useState } from 'react';
import { useButtonContext } from '../../../FormElements/data/context/ButtonContext';
import { useTodoContext } from '../context/TodoContext';
import { useTodosContext } from '../context/TodosContext';

import { findIndex, filter } from 'lodash';
import { deleteTodo, editTodo } from '../service/todosService';

export const useEditTodoHook = todo => {
  const { tempTodo } = useTodoContext();
  const { todos, setTodos } = useTodosContext();
  const { setDisabled } = useButtonContext();

  const [upTodo, setUpTodo] = useState({
    _id: todo._id,
    todo: todo.todo,
  });

  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    setUpTodo({ _id: todo._id, todo: e.currentTarget.value });
  };

  const blurEvent = () => {
    setDisabled(true);
    editTodo({ job: upTodo.todo, _id: upTodo._id });
  };

  const onBtnSubmit = async () => {
    const updatedTodos = [...todos];

    const updatedTodoIndex = findIndex(
      updatedTodos,
      updatedTodo => updatedTodo._id === upTodo._id
    );

    updatedTodos[updatedTodoIndex] = upTodo;
    setTodos(updatedTodos);
    setDisabled(true);

    await editTodo({ job: upTodo.todo, _id: upTodo._id });
  };

  const onDeleteTodo = (todoID: string) => {
    const updatedTodos = filter(
      todos,
      updatedTodo => updatedTodo._id !== todoID
    );
    setTodos(updatedTodos);

    deleteTodo(todoID);
  };

  return {
    upTodo,
    blurEvent,
    onChange,
    onBtnSubmit,
    onDeleteTodo,
  };
};
