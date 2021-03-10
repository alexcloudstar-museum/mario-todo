import React, { FC, useState } from 'react';
import { Button, Input } from '../../FormElements/components';
import { StyledTodo } from './style';

import { useButtonContext } from '../../FormElements/data/context/ButtonContext';
import { useTodosContext } from '../data/context/TodosContext';
import { useTodoContext } from '../data/context/TodoContext';
import AddTodoButtons from './AddTodoButtons';

type TodoProp = { todo: string };

const Todo: FC<TodoProp> = ({ todo }) => {
  const defaultHEIGHT = '100%';
  const [tempTodo, setTempTodo] = useState<string>(todo);
  const { disabled, setDisabled } = useButtonContext();
  const { todos, setTodos } = useTodosContext();
  const { isEditTodo, setIsEditTodo, setTodo } = useTodoContext();

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

  return (
    <StyledTodo>
      <Input
        value={disabled ? todo : tempTodo}
        placeholder={disabled ? todo : tempTodo}
        disabled={disabled}
        type='text'
        onChange={e => onChange(e)}
        height={defaultHEIGHT}
      />
      {disabled ? (
        <>
          <Button
            onClick={() => setDisabled(false)}
            hoverColor={'green'}
            height={defaultHEIGHT}
          >
            <i className='fas fa-pen fa-2x'></i>
          </Button>
          <Button
            onClick={onDeleteTodo}
            hoverColor={'red'}
            height={defaultHEIGHT}
          >
            <i className='fas fa-trash fa-2x'></i>
          </Button>
        </>
      ) : (
        <AddTodoButtons
          onBtnSubmit={onBtnSubmit}
          onBtnCancel={() => setDisabled(true)}
          height={defaultHEIGHT}
        />
      )}
    </StyledTodo>
  );
};

export default Todo;
