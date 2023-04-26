import type { Writable } from 'svelte/store';

export type NamedErrors = Record<string, string[]>;

export type FormResultData = {
  errorMessages?: string[];
  namedErrors?: NamedErrors;
};

export type BroadcastErrors = Writable<NamedErrors>;
