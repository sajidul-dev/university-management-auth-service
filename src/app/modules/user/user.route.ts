import express from 'express';
import validateRequest from '../../middlewires/validateRequest';
import { UserController } from './user.controller';
import { UserValidation } from './user.validation';

const router = express.Router();

router.post(
  '/create-user',
  validateRequest(UserValidation.createUserZodSchema),
  UserController.createUser,
);

export const UserRoutes = router;
