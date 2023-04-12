import { z } from 'zod';

export default z.object({
  firstName: z.string().min(1, { message: 'First name is required' }),
  lastName: z.optional(z.string()),
  email: z.string().email(),
  password: z.string().min(8, { message: 'Password must be at least 8 characters' })
});
