import { Types } from "mongoose";

export type TBlog = {
    _id?: Types.ObjectId;
    slug?: string;
    name: string;
    description: string;
    imageUrl: string;
    createdAt?: Date;
    updatedAt?: Date;
  };
  