import axios from 'axios';
import { getTodosType, addTodoType } from '../../components/types';

const URL = `http://localhost:5000/api`;

export const getTodos = axios.get<getTodosType>(`${URL}/todos`);

export const addTodo = data => axios.post<addTodoType>(`${URL}/add-todo`, data);
