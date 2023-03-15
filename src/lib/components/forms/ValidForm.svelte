<script lang="ts">
  import { enhance, type SubmitFunction } from '$app/forms';
  import { Button, Helper } from 'flowbite-svelte';
  import { setContext } from 'svelte';
  import type { z } from 'zod';
  import { key, type FormContext } from './context';

  export let submitText: string;
  type T = $$Generic<z.ZodRawShape>;
  export let formSchema: ReturnType<typeof z.object<T>>;

  let validMap = new Map(Object.keys(formSchema.shape).map((key) => [key, false]));
  let errorMessage = '';
  setContext<FormContext<T>>(key, {
    formSchema,
    reportValid: (name, isValid) => {
      validMap = validMap.set(name, isValid);
      errorMessage = '';
    }
  });

  const enhanceForm = (() =>
    ({ result }) => {
      switch (result.type) {
        case 'success':
          // TODO: modify this later
          window.location.href = '/p1';
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
  </div>
  <Button type="submit" disabled={errorMessage || Array.from(validMap.values()).includes(false)}
    >{submitText}</Button
  >
  {#if errorMessage}
    <div class="mt-2">
      <Helper color="red">
        <span class="font-medium">{errorMessage}</span>
      </Helper>
    </div>
  {/if}
</form>
