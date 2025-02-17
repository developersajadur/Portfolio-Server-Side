import { Types } from "mongoose";

export type TProject = {
    _id?: Types.ObjectId;
    slug?: string;
    name: string;
    description: string;
    technologies: string[];
    liveUrl: string;
    clientSideUrl?: string;
    serverSideUrl?: string;
    image?: string;
    createdAt?: Date;
    updatedAt?: Date;
  };
  