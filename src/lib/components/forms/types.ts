export type NamedErrors = Record<string, string[]>;

export type FormResultData = {
  errorMessages?: string[];
  namedErrors?: NamedErrors;
};
