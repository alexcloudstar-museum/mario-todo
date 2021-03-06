import React, { FC } from 'react';
import { StyledTodo } from './style';

type TodoProp = { todo: string };

const Todo: FC<TodoProp> = ({ todo }) => {
  return <StyledTodo>{todo}</StyledTodo>;
};

export default Todo;
