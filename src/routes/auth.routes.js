import { Router } from 'express';
import * as userControllers from "../controllers/user.js";
import * as authControllers from "../controllers/auth.js";
import { validateCreateUser, validateLoginUser } from '../validators/user.js';
const authRouter = Router();

authRouter.post('/auth/register', validateCreateUser, userControllers.addUser);
authRouter.post('/auth/login', validateLoginUser, authControllers.login);

export default authRouter;