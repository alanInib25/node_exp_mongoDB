import { handleHttpError } from "../utils/handleMessages.js";
export const checkRol = (roles) => (req, res, next) => {
  try{
    const { role } = req.user;
    if(!role === "admin"){
      handleHttpError(res, "WHITOUT-PERMISON", 403);
      return;
    }
    next();
  } catch (error) {
    handleHttpError(res, "USER_NOT_PERISSIONS", 403);
  }
}