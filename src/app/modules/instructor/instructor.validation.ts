import { z } from 'zod';

const createInstructorSchema = z.object({
    body: z.object({
        name: z.string({ required_error: 'Name is required' }),
        designation: z.string({ required_error: 'Designation is required' }),
        bio: z.string().optional(),
        image: z.string().optional(),
        email: z.string().email().optional(),
        phone: z.string().optional(),
        socialLinks: z.object({
            facebook: z.string().optional(),
            twitter: z.string().optional(),
            linkedin: z.string().optional(),
            github: z.string().optional(),
        }).optional(),
        specialization: z.array(z.string()).optional(),
        isActive: z.boolean().optional(),
        user: z.string().optional(),
    }),
});

const updateInstructorSchema = z.object({
    body: z.object({
        name: z.string().optional(),
        designation: z.string().optional(),
        bio: z.string().optional(),
        image: z.string().optional(),
        email: z.string().email().optional(),
        phone: z.string().optional(),
        socialLinks: z.object({
            facebook: z.string().optional(),
            twitter: z.string().optional(),
            linkedin: z.string().optional(),
            github: z.string().optional(),
        }).optional(),
        specialization: z.array(z.string()).optional(),
        isActive: z.boolean().optional(),
        user: z.string().optional(),
    }),
});

export const InstructorValidation = {
    createInstructorSchema,
    updateInstructorSchema,
};
