import { Router } from 'express';
import { projectValidationSchema } from './project.validation';
import validateRequest from '../../middlewares/validateRequest';
import { projectController } from './project.controller';
import auth from '../../middlewares/auth';
import { USER_ROLE } from '../user/user.constant';

const router = Router();

router.post(
  '/create-project',
  auth(USER_ROLE.admin),
  validateRequest(projectValidationSchema.createProjectValidation),
  projectController.createProjectIntoDb,
);

router.get('/', projectController.getAllProjects);

router.get(
  '/:projectId',
  auth(USER_ROLE.admin),
  projectController.createProjectIntoDb,
);

router.delete(
  'delete-project/:projectId',
  auth(USER_ROLE.admin),
  projectController.deleteSingleProjectById,
);

router.delete(
  'update-project/:projectId',
  auth(USER_ROLE.admin),
  projectController.updateSingleProjectById,
);

export const projectRoute = router;
