import { Request, Response, NextFunction } from 'express';
import Todo from '../models/todo-model';

export const getTodos = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.json({ message: 'Todos' });
};
