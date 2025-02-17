import { Types } from "mongoose";

export type TBlog = {
    _id?: Types.ObjectId;
    slug?: string;
    name: string;
    description: string;
    image: string;
    createdAt?: Date;
    updatedAt?: Date;
  };
  