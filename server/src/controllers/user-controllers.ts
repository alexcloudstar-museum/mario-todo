import { Request, Response, NextFunction } from 'express';
import { UserModel } from '../models/';
import HttpError from '../utils/http-error';

export const createUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { userId } = req.body;

  const newUser = new UserModel({ userId });

  try {
    await newUser.save();
  } catch (err) {
    const error = new HttpError(
      "Todo couldn't be saved. Please try again",
      500
    );

    return next(error);
  }

  res.status(201).json({ message: 'User Created' });
};
