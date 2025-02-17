import { Router } from 'express';
import { authRoute } from '../modules/auth/auth.route';
import { userRoute } from '../modules/user/user.route';
import { projectRoute } from '../modules/project/project.route';

const router = Router();

const moduleRoutes = [
  {
    path: '/',
    route: authRoute,
  },
  {
    path: '/users',
    route: userRoute,
  },
  {
    path: '/projects',
    route: projectRoute,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
