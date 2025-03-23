import { z } from 'zod';

// Define the Zod schema for user validation
const createUserValidation = z.object({
  body: z.object({
    name: z.string().min(1, { message: 'Name is required' }),
    email: z
      .string()
      .email({ message: 'Please enter a valid email address' })
      .min(1, { message: 'Email is required' }),
    password: z
      .string()
      .min(6, { message: 'Password must be at least 6 characters long' }),
    role: z
      .enum(['admin', 'user'], { message: 'Invalid role' })
      .default('user'),
    isBlocked: z.boolean().default(false),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
  }),
});

export const userValidationSchema = {
  createUserValidation,
};
