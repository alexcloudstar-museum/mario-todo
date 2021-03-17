import { Request, Response, NextFunction } from 'express';
import { validationResult } from 'express-validator';

import TodoModel from '../models/todo-model';

import HttpError from '../utils/http-error';

export const getTodos = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return next(new HttpError('Fetching todos failed', 500));
  }

  let todos;

  try {
    todos = await TodoModel.find({});
  } catch (err) {
    const errors = new HttpError('Fetching todos failed', 500);

    return next(errors);
  }

  res.status(200).json({ todos });
};
