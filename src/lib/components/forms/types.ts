import type { Writable } from 'svelte/store';

export type NamedErrors = Record<string, string[]>;

export const addToNamedErrors = (namedErrors: NamedErrors, name: string, error: string) => {
  const errors = namedErrors[name] ?? [];
  if (!errors.includes(error)) {
    errors.push(error);
  }
  return { ...namedErrors, [name]: errors };
};

export const removeFromNamedErrors = (namedErrors: NamedErrors, name: string, error: string) => {
  const errors = namedErrors[name] ?? [];
  if (!(name in namedErrors) || !errors.includes(error)) {
    return namedErrors;
  }
  if (errors.length === 1) {
    delete namedErrors[name];
    return { ...namedErrors };
  }
  errors.splice(errors.indexOf(error), 1);
  return { ...namedErrors, recipientAccountNumber: errors };
};

export type FormErrorData = {
  errorMessages?: string[];
  namedErrors?: NamedErrors;
};

export type BroadcastErrors = Writable<NamedErrors>;
