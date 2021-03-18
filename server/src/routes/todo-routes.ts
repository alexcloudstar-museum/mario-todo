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
todoRouter.get('/todos/:userId', getTodos);

/*
    ** route
    @ /API/add-todo
    ** @req body
    todo - Todo Title e.g: Wash the dishes
*/
todoRouter.post('/add-todo/:userId', addTodo);

/*
    ** route
    @ /API/edit-todo
    ** @params
    todoId
*/
todoRouter.patch('/edit-todo/:todoId/:userId', editTodo);

/*
    ** route
    @ /API/edit-todo
    ** @params
    todoId
*/
todoRouter.delete('/delete-todo/:todoId/:userId', deleteTodo);

export default todoRouter;
