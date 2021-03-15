import { useState } from 'react';
import { useButtonContext } from '../../../FormElements/data/context/ButtonContext';
import { useTodoContext } from '../context/TodoContext';
import { useTodosContext } from '../context/TodosContext';

export const useEditTodoHook = () => {
  const { todo, tempTodo } = useTodoContext();
  const { todos, setTodos } = useTodosContext();
  const { setDisabled } = useButtonContext();

  const [upTodo, setUpTodo] = useState({
    id: tempTodo.id,
    name: tempTodo.name,
  });

  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    setUpTodo({ id: todo.id, name: e.currentTarget.value });
  };

  const blurEvent = () => {
    setDisabled(true);
  };

  const onBtnSubmit = () => {
    const updatedTodos = [...todos];

    const updatedTodoIndex = updatedTodos.findIndex(
      updatedTodos => updatedTodos.id === upTodo.id
    );

    updatedTodos[updatedTodoIndex] = upTodo;
    setTodos(updatedTodos);
    setDisabled(true);
  };

  const onDeleteTodo = (todoID: string) => {
    const updatedTodos = todos.filter(updatedTodo => {
      return updatedTodo.id !== todoID;
    });
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
