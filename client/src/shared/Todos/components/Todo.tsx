import React, { FC } from 'react';
import { Button, Input } from '../../FormElements/components';
import { StyledTodo } from './style';

import { useButtonContext } from '../../FormElements/data/context/ButtonContext';
import AddTodoButtons from './AddTodoButtons';

import { useEditTodoHook } from '../data/hooks/useEditTodoHook';
import { useTodoContext } from '../data/context/TodoContext';

type TodoProp = { todo: any };

const Todo: FC<TodoProp> = ({ todo }) => {
  const defaultHEIGHT = '100%';

  const { tempTodo, setTodo, setTempTodo } = useTodoContext();

  const { disabled, setDisabled } = useButtonContext();
  const editTodoHook = useEditTodoHook(todo);

  const renderTodo = todo.todo ? todo.todo : editTodoHook.upTodo.todo;

  return (
    <StyledTodo>
      <Input
        value={renderTodo}
        placeholder={renderTodo}
        disabled={disabled}
        type='text'
        onBlur={editTodoHook.blurEvent}
        onChange={editTodoHook.onChange}
        height={defaultHEIGHT}
      />
      {disabled ? (
        <>
          <Button
            onClick={() => {
              setDisabled(false);
            }}
            hoverColor={'green'}
            height={defaultHEIGHT}
          >
            <i className='fas fa-pen fa-2x'></i>
          </Button>
          <Button
            onClick={() => editTodoHook.onDeleteTodo(todo._id)}
            hoverColor={'red'}
            height={defaultHEIGHT}
          >
            <i className='fas fa-trash fa-2x'></i>
          </Button>
        </>
      ) : (
        <AddTodoButtons
          onBtnSubmit={editTodoHook.onBtnSubmit}
          onBtnCancel={() => setDisabled(true)}
          height={defaultHEIGHT}
        />
      )}
    </StyledTodo>
  );
};

export default Todo;
