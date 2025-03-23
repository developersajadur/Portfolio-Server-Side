import { z } from "zod";

export const createBlogValidation = z.object({
    body: z.object({
        name: z.string().trim().min(1, { message: "Blog name is required" }),
        description: z.string().trim().min(1, { message: "Blog description is required" }),
        imageUrl: z.string().url({ message: "Live URL must be a valid URL" }),
        createdAt: z.date().optional(),
        updatedAt: z.date().optional(),
    })
});


export const blogValidationSchema = {
    createBlogValidation,
}