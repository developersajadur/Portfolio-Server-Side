import { Router } from 'express';
import { blogValidationSchema } from './blog.validation';
import validateRequest from '../../middlewares/validateRequest';
import { blogController } from './blog.controller';
import Auth from '../../middlewares/auth';
import { USER_ROLE } from '../user/user.constant';

const router = Router();

router.post(
  '/create-blog',
  Auth(USER_ROLE.admin),
  validateRequest(blogValidationSchema.createBlogValidation),
  blogController.createBlogIntoDb,
);

router.get('/', blogController.getAllBlogs);

router.get(
  '/slug/:slug',
  // auth(USER_ROLE.admin),
  blogController.getSingleBlogBySlug,
);

router.get(
  '/:blogId',
  // Auth(),
  blogController.getSingleBlogById,
);

router.delete(
  '/delete-blog/:blogId',
  Auth(USER_ROLE.admin),
  blogController.deleteSingleBlogById,
);

router.put(
  '/update-blog/:blogId',
  Auth(USER_ROLE.admin),
  blogController.updateSingleBlogById,
);

export const blogRoute = router;
