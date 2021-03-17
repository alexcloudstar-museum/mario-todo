import { Router } from 'express';

const todoRouter: Router = Router();

/*
    ** route
    @ /API/todos
*/
todoRouter.get('/todos', () => {});

export default todoRouter;
