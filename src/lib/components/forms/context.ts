import type { z } from 'zod';
import type { Writable } from 'svelte/store';
import type { NamedErrors } from './types';

export type FormContext<T extends z.ZodRawShape> = {
  formSchema: ReturnType<typeof z.object<T>> | null;
  reportValid: (name: string, isValid: boolean) => void;
  broadcastError: Writable<NamedErrors>;
};

export const key = Symbol();
