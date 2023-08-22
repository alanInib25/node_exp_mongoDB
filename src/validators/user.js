import { check } from "express-validator";
import { validateResult } from "../utils/handleValidator.js";

export const validateCreateUser = [
  check("name").exists().notEmpty().isLength({ min: 3, max: 99 }),
  check("password").exists().notEmpty().isLength({ min: 6, max: 15 }),
  check("age").exists().notEmpty().isNumeric(),
  check("email").exists().notEmpty().isEmail(),
  (req, res, next) => validateResult(req, res, next),
];

export const validateUpdateUserData = [
  check("name").exists().notEmpty().isLength({ min: 3, max: 99 }),
  check("age").exists().notEmpty().isNumeric(),
  check("email").exists().notEmpty().isEmail(),
  (req, res, next) => validateResult(req, res, next),
];

export const validateUpdateUserPassword = [
  check("password").exists().notEmpty().isLength({ min: 6, max: 15 }),
  (req, res, next) => validateResult(req, res, next),
];

export const validateLoginUser = [
  check("email").exists().notEmpty().isEmail(),
  check("password").exists().notEmpty().isLength({ min: 6, max: 15 }),
  (req, res, next) => validateResult(req, res, next),
];
