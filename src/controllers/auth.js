import models from "../models/index.js";
import { matchedData } from "express-validator";
import { handleHttpError, defaultMessages } from "../utils/handleMessages.js";
import { comparePassword } from "../utils/handlePassword.js";
import { tokenSing } from "../utils/handleJwt.js";
const { Users } = models;

export const login = async (req, res) => {
  try {
    const { email, password } = matchedData(req);
    const user = await Users.findOne({ email: email });
    if (!user) {
      handleHttpError(res, "USER_NO_EXIST", 404);
      return;
    }
    const checkPassword = await comparePassword(password, user.password); //true - plainpassword - hashpassword
    if (!checkPassword) {
      handleHttpError(res, "Password_Invalid", 401);
      return;
    }
    user.set("password", undefined, { strict: false });
    const data = {
      token: await tokenSing(user),
      user,
    };
    res.send({ data });
  } catch (error) {
    handleHttpError(res, error.message || defaultMessages.user.login);
  }
};
