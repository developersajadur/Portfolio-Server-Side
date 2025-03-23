import { Router } from 'express';
import { userController } from './user.controller';
import { USER_ROLE } from './user.constant';
import validateRequest from '../../middlewares/validateRequest';
import { userValidationSchema } from './user.validation';
import Auth from '../../middlewares/auth';

const router = Router();

router.post(
  '/create-user',
  Auth(USER_ROLE.admin),
  validateRequest(userValidationSchema.createUserValidation),
  userController.createUserIntoDb,
);
router.get('/', Auth(USER_ROLE.admin), userController.getAllUsers);

export const userRoute = router;
