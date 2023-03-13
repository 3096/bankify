<script lang="ts">
  import { Button } from 'flowbite-svelte';
  import { setContext } from 'svelte';
  import type { z } from 'zod';
  import { key, type FormContext } from './context';

  export let submitText: string;
  type T = $$Generic<z.ZodRawShape>;
  export let formSchema: ReturnType<typeof z.object<T>>;

  let validMap = new Map(Object.keys(formSchema.shape).map((key) => [key, false]));
  setContext<FormContext<T>>(key, {
    formSchema,
    reportValid: (name, isValid) => {
      validMap = validMap.set(name, isValid);
    }
  });
</script>

<form method="POST">
  <div {...$$restProps}>
    <slot />
  </div>
  <Button type="submit" disabled={Array.from(validMap.values()).includes(false)}
    >{submitText}</Button
  >
</form>
