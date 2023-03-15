<script lang="ts">
  import { Input, Label, Helper } from 'flowbite-svelte';
  import { getContext } from 'svelte';
  import type { SafeParseReturnType } from 'zod';
  import { key, type FormContext } from './context';

  export let name: string;
  export let label: string;

  type T = $$Generic<z.ZodRawShape>;
  let { formSchema, reportValid } = getContext<FormContext<T>>(key);

  let startNagging = false;
  let inputStr = '';

  $: parseResult = formSchema
    ? (formSchema.shape[name].safeParse(inputStr) as SafeParseReturnType<String, any>)
    : null;
  $: if (inputStr) {
    reportValid(name, parseResult ? parseResult.success : true);
  }
</script>

<div>
  <Label
    for={name}
    class="mb-2 transition duration-200 ease-in-out"
    color={startNagging && parseResult && !parseResult.success ? 'red' : undefined}
  >
    {label}
  </Label>
  <Input
    {name}
    class={$$restProps.class ?? 'transition duration-200 ease-in-out'}
    {...$$restProps}
    bind:value={inputStr}
    on:blur={() => {
      startNagging = true;
    }}
    color={startNagging && parseResult && !parseResult.success ? 'red' : 'base'}
  />
  {#if startNagging && parseResult && !parseResult.success}
    <div class="mt-2">
      {#each parseResult.error.issues as issue}
        <Helper color="red">
          <span class="font-medium">
            {issue.message}
          </span>
        </Helper>
      {/each}
    </div>
  {/if}
</div>
