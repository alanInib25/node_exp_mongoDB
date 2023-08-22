import { Router } from "express";
import {
  validateCreateUser,
  validateUpdateUserData,
  validateUpdateUserPassword
} from "../validators/user.js";
import {
  validateObjectId,
} from "../validators/objectId.js";
import * as userControllers from "../controllers/user.js";
const userRouter = Router();

userRouter.get("/users", userControllers.getUsers);
userRouter.get("/users/:id", validateObjectId, userControllers.getUser);
userRouter.post("/users/add", validateCreateUser, userControllers.addUser);
userRouter.put(
  "/users/edit/:id",
  validateObjectId,
  validateUpdateUserData,
  userControllers.updateUserData
);
userRouter.put(
  "./users/:id",
  validateObjectId,
  userControllers.updateUserPassword
);
userRouter.put(
  "/users/update-password/:id",
  validateObjectId,
  validateUpdateUserPassword,
  userControllers.updateUserPassword
);
userRouter.delete(
  "/users/delete/:id",
  validateObjectId,
  userControllers.deleteUser
);
userRouter.delete("/users/delete", userControllers.deleteUsers);

export default userRouter;