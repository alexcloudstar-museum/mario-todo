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

  let user;

  try {
    user = await UserModel.findOne({ userId });
  } catch (err) {
    const error = new HttpError(
      'Adding User failed, please try again later',
      500
    );

    return next(error);
  }

  if (user) {
    const error = new HttpError(
      'User already exist, please try again later',
      500
    );

    return next(error);
  }

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
