import { Router } from 'express';

import { getTodos } from '../controllers/todo-controllers';

const todoRouter: Router = Router();

/*
    ** route
    @ /API/todos
*/
todoRouter.get('/todos', getTodos);

export default todoRouter;
