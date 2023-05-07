<script lang="ts">
  import { setContext } from 'svelte';
  import type { z } from 'zod';
  import { enhance, type SubmitFunction } from '$app/forms';
  import { key, type FormContext } from './context';
  import type { FormErrorData, NamedErrors } from './types';
  import { writable } from 'svelte/store';

  export let actionName: string | null = null;
  export let submitText: string;
  type T = $$Generic<z.ZodRawShape>;
  export let formSchema: ReturnType<typeof z.object<T>> | null = null;
  type FormResultType = $$Generic<Record<string, unknown>>;
  export let onSuccess: (data: FormResultType) => Promise<void> | void = () => {};
  export let broadcastError = writable({} as NamedErrors);

  let validMap = formSchema
    ? new Map(Object.entries(formSchema.shape).map(([key, value]) => [key, value.isOptional()]))
    : new Map<string, boolean>();
  $: hasInvalidFields = Array.from(validMap.values()).includes(false);
  let formErrorMessages: string[] = [];
  let isLoading = false;

  setContext<FormContext<T>>(key, {
    formSchema,
    reportValid: (name, isValid) => {
      validMap = validMap.set(name, isValid);
      if (isValid) {
        formErrorMessages = [];
      }
    },
    broadcastError
  });

  const enhanceForm = (() => {
    isLoading = true;
    return async ({ result }) => {
      switch (result.type) {
        case 'success':
          await onSuccess(result.data!);
          break;
        case 'failure':
          if (result.data!.errorMessages !== undefined) {
            formErrorMessages = result.data!.errorMessages;
          }
          if (result.data!.namedErrors !== undefined) {
            broadcastError.set(result.data!.namedErrors);
          }
          break;
      }
      isLoading = false;
    };
  }) satisfies SubmitFunction<FormResultType, FormErrorData>;
</script>

<form method="POST" use:enhance={enhanceForm} action={actionName ? `?/${actionName}` : null}>
  <div {...$$restProps}>
    <slot />
    <button
      class="btn btn-primary mt-6 transition duration-200 ease-in-out"
      color="primary"
      type="submit"
      disabled={isLoading || !!formErrorMessages.length || hasInvalidFields}
      formaction={actionName ? `?/${actionName}` : null}
    >
      {submitText}
    </button>
    {#each formErrorMessages as message}
      <span class="font-medium text-red-500">{message}</span>
    {/each}
  </div>
</form>
