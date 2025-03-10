import { Request, Response, NextFunction } from 'express';
import { check, validationResult } from 'express-validator';

// Middleware to validate register an user
export const validateRegister = [
  check('name')
    .notEmpty().withMessage('The name is required')
    .isLength({ min: 3 }).withMessage('The name must be at least 3 characters'),

  check('email')
    .notEmpty().withMessage('The email is required')
    .isEmail().withMessage('The email must be valid'),

  check('password')
    .notEmpty().withMessage('The password is required')
    .isLength({ min: 8 }).withMessage('The password must be at least 8 characters'),

  check('confirmPassword')
    .custom((value, { req }) => {
      if (value !== req.body.password) {
        throw new Error('The passwords do not match');
      }
      return true;
    }),

  (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(400).json({ errors: errors.array() });
      return;
    }
    next();
  },
];

// Middleware to validate login an user
export const validateLogin = [
  check('email')
    .notEmpty().withMessage('The email is required')
    .isEmail().withMessage('The email must be valid'),

  check('password')
    .notEmpty().withMessage('The password is required'),

  (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(400).json({ errors: errors.array() });
      return;
    }
    next();
  },
];