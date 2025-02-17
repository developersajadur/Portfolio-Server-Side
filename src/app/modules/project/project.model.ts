import { model, Schema } from "mongoose";
import { TProject } from "./project.interface";

const projectSchema = new Schema<TProject>(
  {
    name: {
      type: String,
      required: [true, "Project name is required"],
      trim: true,
    },
    slug: {
      type: String,
    },
    description: {
      type: String,
      required: [true, "Project description is required"],
      trim: true,
    },
    technologies: {
      type: [String],
      required: [true, "Technologies used are required"],
    },
    liveUrl: {
      type: String,
      required: [true, "Live URL is required"],
    },
    clientSideUrl: {
      type: String,
    },
    serverSideUrl: {
      type: String,
    },
    image: {
      type: String,
      required: [true, "Image URL is required"],
    },
  },
  { timestamps: true }
);

export const Project = model<TProject>('Project', projectSchema)