<script lang="ts">
  import { setContext } from 'svelte';
  import type { z } from 'zod';
  import { enhance, type SubmitFunction } from '$app/forms';
  import { key, type FormContext } from './context';
  import type { FormResultData, NamedErrors } from './types';
  import { writable } from 'svelte/store';

  export let submitText: string;
  type T = $$Generic<z.ZodRawShape>;
  export let formSchema: ReturnType<typeof z.object<T>> | null = null;
  export let onSuccess = () => {};

  let validMap = formSchema
    ? new Map(Object.entries(formSchema.shape).map(([key, value]) => [key, value.isOptional()]))
    : new Map<string, boolean>();
  $: hasInvalidFields = Array.from(validMap.values()).includes(false);
  let formErrorMessages: string[] = [];
  let broadcastError = writable({} as NamedErrors);

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

  const enhanceForm = (() =>
    ({ result }) => {
      switch (result.type) {
        case 'success':
          onSuccess();
          return;
        case 'failure':
          if (result.data!.errorMessages !== undefined) {
            formErrorMessages = result.data!.errorMessages;
          }
          if (result.data!.namedErrors !== undefined) {
            broadcastError.set(result.data!.namedErrors);
          }
          return;
      }
    }) satisfies SubmitFunction<undefined, FormResultData>;
</script>

<form method="POST" use:enhance={enhanceForm}>
  <div {...$$restProps}>
    <slot />
    <button
      class="btn btn-primary mt-6 transition duration-200 ease-in-out"
      color="primary"
      type="submit"
      disabled={!!formErrorMessages.length || hasInvalidFields}
    >
      {submitText}
    </button>
    {#each formErrorMessages as message}
      <span class="font-medium text-red-500">{message}</span>
    {/each}
  </div>
</form>
