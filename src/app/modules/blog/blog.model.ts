import { model, Schema } from 'mongoose';
import { TBlog } from './blog.interface';

const blogSchema = new Schema<TBlog>(
  {
    name: {
      type: String,
      required: [true, 'Blog name is required'],
      trim: true,
    },
    slug: {
      type: String,
    },
    description: {
      type: String,
      required: [true, 'Blog description is required'],
      trim: true,
    },
    imageUrl: {
      type: String,
      required: [true, 'Blog Image is required'],
    },
  },
  { timestamps: true },
);

export const Blog = model<TBlog>('Blog', blogSchema);
