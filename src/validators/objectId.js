import { check } from 'express-validator';
import { validateResult } from '../utils/handleValidator.js';

export const validateObjectId = [
  check("id").exists().notEmpty().isMongoId(),
  (req, res, next) => validateResult(req, res, next)
];