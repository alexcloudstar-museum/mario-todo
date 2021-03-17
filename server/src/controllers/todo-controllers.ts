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

export const addTodo = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return next(new HttpError('Invalid Todo, please check your data', 500));
  }

  const { todo } = req.body;

  let existingTodo;

  try {
    existingTodo = await TodoModel.findOne({ todo });
  } catch (err) {
    const error = new HttpError(
      'Adding Todo failed, please try again later',
      500
    );

    return next(error);
  }

  if (existingTodo) {
    const error = new HttpError(
      'Todo already exist, please provide a new one',
      400
    );

    return next(error);
  }

  const newTodo = new TodoModel({ todo });

  try {
    await newTodo.save();
  } catch (err) {
    const error = new HttpError(
      "Todo couldn't be saved. Please try again",
      500
    );

    return next(error);
  }

  res.status(201).json({ message: 'Todo created', newTodo });
};

export const editTodo = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const todoId = req.params.todoId;

  console.log(todoId);

  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    const error = new HttpError('Invalid Todo, please review your data', 422);

    return next(error);
  }

  const { job } = req.body;

  let todo;

  try {
    todo = await TodoModel.findById(todoId);
  } catch (err) {
    const error = new HttpError(
      'Something went wrong, could not update the todo',
      500
    );

    return next(error);
  }

  if (!todo) {
    return next(
      new HttpError('Could not find the Todo, please review your data', 404)
    );
  }

  todo = job;

  try {
    await todo.save();
  } catch (err) {
    const error = new HttpError(
      'Something went wrong, could not update the todo',
      500
    );

    return next(error);
  }

  res.status(201).json({ message: 'Todo updated!', todo });
};

export const deleteTodo = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const todoId = req.params.todoId;

  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return next(new HttpError('Something went wrong, please try again', 500));
  }

  let todo;

  try {
    todo = await TodoModel.findById(todoId);
  } catch (err) {
    return next(new HttpError('Something went wrong, please try again', 500));
  }

  if (!todo) {
    return next(
      new HttpError('Could not find the Todo, please review your data', 404)
    );
  }

  try {
    await todo.remove();
  } catch (err) {
    return next(new HttpError('Something went wrong, please try again', 500));
  }

  res.status(201).json({ message: 'Todo Removed!' });
};
