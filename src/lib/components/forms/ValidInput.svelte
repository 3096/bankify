<script lang="ts">
  import { getContext } from 'svelte';
  import type { SafeParseReturnType } from 'zod';
  import { key, type FormContext } from './context';

  export let name: string;
  export let label: string;
  export let elementType: 'input' | 'select' = 'input';

  type T = $$Generic<z.ZodRawShape>;
  let { formSchema, reportValid, broadcastError } = getContext<FormContext<T>>(key);

  let startNagging = false;
  let inputStr = '';

  let errorHistory = new Map<string, string[]>();
  broadcastError.subscribe((namedErrors) => {
    if (name in namedErrors) {
      errorHistory = errorHistory.set(inputStr, Array(...namedErrors[name]));
    }
  });

  $: schemaParseResult = formSchema
    ? (formSchema.shape[name].safeParse(inputStr) as SafeParseReturnType<String, any>)
    : null;
  $: showError =
    startNagging &&
    ((schemaParseResult && !schemaParseResult.success) || errorHistory.has(inputStr));
  $: if (inputStr) {
    reportValid(name, !showError);
  }
</script>

<div>
  <label for={name} class="label">
    <span class="label-text transition duration-200 ease-in-out" class:text-red-500={showError}>
      {label}
    </span>
  </label>

  {#if elementType === 'select'}
    <select
      {name}
      class={($$restProps.class ?? 'w-full transition duration-200 ease-in-out') +
        ' select select-bordered'}
      class:select-error={showError}
      {...$$restProps}
      bind:value={inputStr}
      on:blur={() => {
        startNagging = true;
      }}
    >
      <slot />
    </select>
  {:else if elementType === 'input'}
    <input
      {name}
      class={($$restProps.class ?? 'w-full transition duration-200 ease-in-out') +
        ' input input-bordered'}
      class:input-error={showError}
      {...$$restProps}
      bind:value={inputStr}
      on:blur={() => {
        startNagging = true;
      }}
    />
  {/if}

  {#if showError}
    <label class="label" for={name}>
      {#if schemaParseResult && !schemaParseResult.success}
        {#each schemaParseResult.error.issues as issue}
          <span class="font-medium label-text-alt text-red-500">
            {issue.message}
          </span>
        {/each}
      {/if}
      {#each errorHistory.get(inputStr) || [] as message}
        <span class="font-medium label-text-alt text-red-500">
          {message}
        </span>
      {/each}
    </label>
  {/if}
</div>
