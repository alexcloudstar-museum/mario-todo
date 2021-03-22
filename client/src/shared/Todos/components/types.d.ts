import { ButtonProps } from '../../FormElements/types/types';

export interface AddTodoProps {}

export type AddTodoButtonsProps = Pick<ButtonProps, 'height'> & {
  onBtnSubmit: () => void;
  onBtnCancel: () => void;
};

export interface getTodosType {
  todos: any;
  userId: String;
}

export interface addTodoType {
  userId: string;
  job: string;
}

export type editTodoType = Pick<addTodoType, 'job'> & { _id: string };

export type deleteTodoType = Pick<editTodoType, '_id'>;
