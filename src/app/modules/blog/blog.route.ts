import { Router } from 'express';
import { blogValidationSchema } from './blog.validation';
import validateRequest from '../../middlewares/validateRequest';
import { blogController } from './blog.controller';
import auth from '../../middlewares/auth';
import { USER_ROLE } from '../user/user.constant';

const router = Router();

router.post(
  '/create-blog',
  auth(USER_ROLE.admin),
  validateRequest(blogValidationSchema.createBlogValidation),
  blogController.createBlogIntoDb,
);

router.get('/', blogController.getAllBlogs);

router.get(
  '/:slug',
  auth(USER_ROLE.admin),
  blogController.getSingleBlogBySlug,
);

router.delete(
  'delete-blog/:slug',
  auth(USER_ROLE.admin),
  blogController.deleteSingleBlogById,
);

router.delete(
  'update-blog/:slug',
  auth(USER_ROLE.admin),
  blogController.deleteSingleBlogById,
);

export const blogRoute = router;
