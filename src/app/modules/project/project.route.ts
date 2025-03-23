import { Router } from 'express';
import { projectValidationSchema } from './project.validation';
import validateRequest from '../../middlewares/validateRequest';
import { projectController } from './project.controller';
import Auth from '../../middlewares/auth';
import { USER_ROLE } from '../user/user.constant';

const router = Router();

router.post(
  '/create-project',
  Auth(USER_ROLE.admin),
  validateRequest(projectValidationSchema.createProjectValidation),
  projectController.createProjectIntoDb,
);

router.get('/', projectController.getAllProjects);

router.get(
  '/:projectId',
  // auth(USER_ROLE.admin),
  projectController.getSingleProjectById,
);

router.delete(
  '/delete-project/:projectId',
  Auth(USER_ROLE.admin),
  projectController.deleteSingleProjectById,
);

router.put(
  '/update-project/:projectId',
  Auth(USER_ROLE.admin),
  projectController.updateSingleProjectById,
);

export const projectRoute = router;
