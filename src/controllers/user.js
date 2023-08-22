import models from "../models/index.js";
import { encrypt } from "../utils/handlePassword.js";
import { matchedData } from "express-validator";
import { handleHttpError, defaultMessages } from "../utils/handleMessages.js";
import { tokenSing } from "../utils/handleJwt.js";
const { Users } = models;

//get all users
export const getUsers = async (req, res) => {
  try {
    const users = await Users.find({}).select("-password");
    !users.length ? handleHttpError(res, "Sin usuarios") : res.json(users);
  } catch (error) {
    handleHttpError(res, error.message || defaultMessages.user.getAll);
  }
};

//get a user
export const getUser = async (req, res) => {
  try {
    const { id } = matchedData(req);
    const user = await Users.findById(id); /* .select('-password') */ //|| null;
    !user ? handleHttpError(res, "Sin usuario") : res.json(user);
  } catch (error) {
    handleHttpError(res, error.message || defaultMessages.user.get);
  }
};

//add a user
export const addUser = async (req, res) => {
  try {
    const { password, ...body } = matchedData(req);
    body.password = await encrypt(password);
    const user = await new Users(body).save();
    user.set("password", undefined, { strict: false });
    const data = {
      token: await tokenSing(user),
      user,
    };
    res.send({ data });
  } catch (error) {
    handleHttpError(res, error.message || defaultMessages.user.add);
  }
};

//update name and age user
export const updateUserData = async (req, res) => {
  try {
    const { id, ...body } = matchedData(req);
    await Users.findByIdAndUpdate(id, body);
    handleHttpError(res, "usuario actualizado");
  } catch (error) {
    handleHttpError(res, error.message || defaultMessages.user.update);
  }
};

//update password user
export const updateUserPassword = async (req, res) => {
  try {
    const { id, password } = matchedData(req);
    const user = await Users.findById(id);
    if (!user) handleHttpError(res, "sin usuario");
    else {
      user.password = await encrypt(password);
      await user.save();
      handleHttpError(res, "password actualizada");
    }
  } catch (error) {
    handleHttpError(res, error.message || defaultMessages.user.updatePassword);
  }
};

//delete a user
export const deleteUser = async (req, res) => {
  try {
    const { id } = matchedData(req);
    await Users.findByIdAndDelete(id);
    handleHttpError(res, "usuario eliminado");
  } catch (error) {
    handleHttpError(res, error.message || defaultMessages.user.delete);
  }
};

//delete all users
export const deleteUsers = async (req, res) => {
  try {
    await Users.deleteMany();
    handleHttpError(res, "ususarios eliminados");
  } catch (error) {
    handleHttpError(res, error.message || defaultMessages.user.deleteAll);
  }
};
