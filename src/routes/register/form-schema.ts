import { z } from 'zod';

export default z.object({
  name: z.string().min(1),
  email: z.string().email(),
  password: z.string().min(8)
});
