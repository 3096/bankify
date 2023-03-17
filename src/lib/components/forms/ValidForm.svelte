<script lang="ts">
  import { enhance, type SubmitFunction } from '$app/forms';
  import { Button, Helper } from 'flowbite-svelte';
  import { setContext } from 'svelte';
  import type { z } from 'zod';
  import { key, type FormContext } from './context';

  export let submitText: string;
  type T = $$Generic<z.ZodRawShape>;
  export let formSchema: ReturnType<typeof z.object<T>> | null = null;
  export let onSuccess = () => {};

  let validMap = formSchema
    ? new Map(Object.keys(formSchema.shape).map((key) => [key, false]))
    : null;
  let errorMessage = '';
  setContext<FormContext<T>>(key, {
    formSchema,
    reportValid: (name, isValid) => {
      if (validMap) {
        validMap = validMap.set(name, isValid);
      }
      errorMessage = '';
    }
  });

  const enhanceForm = (() =>
    ({ result }) => {
      switch (result.type) {
        case 'success':
          onSuccess();
          return;
        case 'failure':
          errorMessage = result.data!.message;
          return;
      }
    }) satisfies SubmitFunction;
</script>

<form method="POST" use:enhance={enhanceForm}>
  <div {...$$restProps}>
    <slot />
    <Button
      size="lg"
      class="mt-1.5 transition duration-200 ease-in-out"
      color="primary"
      type="submit"
      disabled={errorMessage || (validMap ? Array.from(validMap.values()).includes(false) : false)}
    >
      {submitText}
      <div class=" font-normal" />
    </Button>
    {#if errorMessage}
      <Helper color="red">
        <span class="font-medium">{errorMessage}</span>
      </Helper>
    {/if}
  </div>
</form>
