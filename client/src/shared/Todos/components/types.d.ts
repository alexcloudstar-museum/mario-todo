import { ButtonProps } from '../../FormElements/types/types';

export interface AddTodoProps {}

export type AddTodoButtonsProps = Pick<ButtonProps, 'height'> & {
  onBtnSubmit: () => void;
  onBtnCancel: () => void;
};

export interface getTodosType {
  todos: [{ _id: string; todo: string }] | [];
}

export interface addTodoType {
  todo: string;
}
