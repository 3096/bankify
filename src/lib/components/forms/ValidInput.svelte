<script lang="ts">
  import { getContext } from 'svelte';
  import type { SafeParseReturnType } from 'zod';
  import { key, type FormContext } from './context';

  export let name: string;
  export let label: string;
  export let elementType: 'input' | 'select' = 'input';
  export let value = '';

  type T = $$Generic<z.ZodRawShape>;
  let { formSchema, reportValid, broadcastError } = getContext<FormContext<T>>(key);

  let startNagging = false;

  let errorValue: null | string = null;
  let errorMessages: null | string[] = null;
  broadcastError.subscribe((namedErrors) => {
    if (name in namedErrors) {
      errorValue = value;
      errorMessages = namedErrors[name];
    } else {
      errorValue = null;
      errorMessages = null;
    }
  });

  const onInput = (e: Event) => {
    if (value !== errorValue) {
      errorValue = null;
      errorMessages = null;
    }
  };
  const onBlur = () => {
    startNagging = true;
  };

  $: schemaParseResult = formSchema
    ? (formSchema.shape[name].safeParse(value) as SafeParseReturnType<String, any>)
    : null;
  $: showError =
    startNagging && ((schemaParseResult && !schemaParseResult.success) || errorMessages !== null);
  $: if (value) {
    reportValid(name, !showError);
  }
</script>

<div>
  <label for={name} class="label">
    <span class="label-text transition duration-200 ease-in-out" class:text-red-500={showError}>
      {label}
    </span>
  </label>

  <div class:input-group={$$slots.prepend || $$slots.append}>
    <slot name="prepend" />
    {#if elementType === 'select'}
      <select
        {name}
        class={($$restProps.class ?? 'w-full transition duration-200 ease-in-out') +
          ' select select-bordered'}
        class:select-error={showError}
        {...$$restProps}
        bind:value
        on:input={onInput}
        on:blur={onBlur}
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
        bind:value
        on:input={onInput}
        on:blur={onBlur}
      />
    {/if}
    <slot name="append" />
  </div>

  {#if showError}
    <label class="label" for={name}>
      {#if schemaParseResult && !schemaParseResult.success}
        {#each schemaParseResult.error.issues as issue}
          <span class="font-medium label-text-alt text-red-500">
            {issue.message}
          </span>
        {/each}
      {/if}
      {#each errorMessages || [] as message}
        <span class="font-medium label-text-alt text-red-500">
          {message}
        </span>
      {/each}
    </label>
  {/if}
</div>
