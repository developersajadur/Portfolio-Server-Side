import { Types } from 'mongoose';
import { USER_ROLE } from './user.constant';

export type TUser = {
  _id?: Types.ObjectId;
  name: string;
  email: string;
  password: string;
  role: 'user' | 'admin';
  isBlocked: boolean;
  createdAt?: Date;
  updatedAt?: Date;
};

export type TUserRole = keyof typeof USER_ROLE;
