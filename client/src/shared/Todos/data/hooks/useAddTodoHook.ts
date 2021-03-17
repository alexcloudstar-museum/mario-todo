import { FormEvent } from 'react';
import { useTodoContext } from '../context/TodoContext';
import { useTodosContext } from '../context/TodosContext';
import { addTodo } from '../service/todosService';

export const useAddTodoHook = () => {
  const { todo, tempTodo, setTodo, setTempTodo } = useTodoContext();
  const { todos, setTodos } = useTodosContext();

  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    setTodo({
      _id: Math.floor(Math.random() * 11).toString(),
      todo: e.currentTarget.value,
    });
  };

  const onBtnSubmit = () => {
    addTodo({ todo: todo.todo });
    setTodos(todos.concat({ _id: todo._id, todo: todo.todo }));
    setTempTodo({ _id: todo._id, todo: todo.todo });
    setTodo({ todo: '' });
  };

  const onBtnCancel = () => {
    setTodo({ todo: '' });
  };

  return {
    onChange,
    onBtnSubmit,
    onBtnCancel,
  };
};
