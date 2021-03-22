import { Router } from 'express';

import { createUser } from '../controllers/user-controllers';

const userRouter: Router = Router();

/*
    ** route
    @ /API/user

*/
userRouter.post('/create-user', createUser);

export default userRouter;
