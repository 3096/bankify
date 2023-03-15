import type { z } from 'zod';

export type FormContext<T extends z.ZodRawShape> = {
  formSchema: ReturnType<typeof z.object<T>> | null;
  reportValid: (name: string, isValid: boolean) => void;
};

export const key = Symbol();
