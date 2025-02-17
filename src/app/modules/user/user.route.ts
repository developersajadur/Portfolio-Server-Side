import { Router } from 'express';
import { userController } from './user.controller';
import auth from '../../middlewares/auth';
import { USER_ROLE } from './user.constant';
import validateRequest from '../../middlewares/validateRequest';
import { userValidationSchema } from './user.validation';

const router = Router();

router.post(
  '/create-user',
  validateRequest(userValidationSchema.createUserValidation),
  userController.createUserIntoDb,
);
router.get('/', auth(USER_ROLE.admin), userController.getAllUsers);

export const userRoute = router;
