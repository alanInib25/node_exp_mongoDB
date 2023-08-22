import { handleHttpError } from "../utils/handleMessages.js";
import { verifyToken } from "../utils/handleJwt.js";
import models from "../models/index.js";

const { Users } = models;

export const authMiddleware = async (req, res, next) => {
  try {
    const authorization = req.headers.authorization;
    if (!authorization) {
      handleHttpError(res, "NOT_TOKEN", 401);
      return;
    }

    const token = authorization.split(" ")[1]; //|| .pop()
    const dataToken = await verifyToken(token);

    if (!dataToken._id) {
      handleHttpError(res, "ERROR_ID_TOKEN", 401);
      return;
    }

    const user = Users.findById(dataToken._id);
    req.user = user;
    next();
  } catch (error) {
    handleHttpError(res, "NOT_SESSION", 401);
  }
};
