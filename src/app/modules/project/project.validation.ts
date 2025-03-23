import { z } from "zod";

export const createProjectValidation = z.object({
    body: z.object({
        name: z.string().trim().min(1, { message: "Project name is required" }),
        description: z.string().trim().min(1, { message: "Project description is required" }),
        technologies: z.array(z.string().min(1, { message: "Technology name cannot be empty" })).nonempty({ message: "At least one technology is required" }),
        liveUrl: z.string().url({ message: "Live URL must be a valid URL" }),
        clientSideUrl: z.string().url({ message: "Client-side URL must be a valid URL" }).optional(),
        serverSideUrl: z.string().url({ message: "Server-side URL must be a valid URL" }).optional(),
        imageUrl: z.string().url({ message: "Image URL must be a valid URL" }),
        createdAt: z.date().optional(),
        updatedAt: z.date().optional(),
    })
});


export const projectValidationSchema = {
    createProjectValidation,
}