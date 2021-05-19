import { FormEvent } from 'react';
import getLocalStorageItem from '../../../../utils/localStorage/getLocalStorageItem';
import { useTodoContext } from '../context/TodoContext';
import { useTodosContext } from '../context/TodosContext';
import { addTodo, getTodos } from '../service/todosService';

export const useAddTodoHook = () => {
  const { todo, setTodo } = useTodoContext();
  const { todos, setTodos } = useTodosContext();

  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    setTodo({
      todo: e.currentTarget.value,
    });
  };

  const onBtnSubmit = async () => {
    const userId = getLocalStorageItem('id');
    const newTodo = await addTodo({ job: todo.todo, userId });

    const fetchedTodos = await getTodos();
    setTodos(fetchedTodos.data.todos);
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
