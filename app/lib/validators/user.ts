import { z } from 'zod'

export const UserDataValidator = z.object({
    email: z.string(),
    password: z.string().min(8).max(20),
})