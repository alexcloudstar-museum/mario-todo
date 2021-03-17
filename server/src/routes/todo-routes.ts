import { Router } from 'express';

import {
  getTodos,
  addTodo,
  editTodo,
  deleteTodo,
} from '../controllers/todo-controllers';

const todoRouter: Router = Router();

/*
    ** route
    @ /API/todos
*/
todoRouter.get('/todos', getTodos);

/*
    ** route
    @ /API/add-todo
    ** @req body
    todo - Todo Title e.g: Wash the dishes
*/
todoRouter.post('/add-todo', addTodo);

/*
    ** route
    @ /API/edit-todo
    ** @params
    todoId
*/
todoRouter.patch('/edit-todo/:todoId', editTodo);

/*
    ** route
    @ /API/edit-todo
    ** @params
    todoId
*/
todoRouter.delete('/delete-todo/:todoId', deleteTodo);

export default todoRouter;
