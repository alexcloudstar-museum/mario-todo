import axios from 'axios';
import getLocalStorageItem from '../../../../utils/localStorage/getLocalStorageItem';
import {
  getTodosType,
  addTodoType,
  editTodoType,
  deleteTodoType,
} from '../../components/types';

const URL = import.meta.env.SNOWPACK_PUBLIC_API_URL;

export const createUser = data =>
  axios.post<{ userId: string }>(`${URL}/create-user/`, data);

export const getTodos = () =>
  axios.get<getTodosType>(`${URL}/todos/${getLocalStorageItem('id')}`);

export const addTodo = async ({ userId, job }: addTodoType) =>
  await axios.post<addTodoType>(`${URL}/add-todo/${userId}`, { job });

export const editTodo = async ({ job, _id }) =>
  await axios.patch<editTodoType>(`${URL}/edit-todo/${_id}`, { job });

export const deleteTodo = (_id: string) =>
  axios.delete<deleteTodoType>(`${URL}/delete-todo/${_id}`);
