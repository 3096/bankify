<script lang="ts">
  import { goto } from '$app/navigation';
  import ValidForm from '$lib/components/forms/ValidForm.svelte';
  import ValidInput from '$lib/components/forms/ValidInput.svelte';
  import { ACCOUNT_TYPE_NAMES } from '$lib/account';
</script>

<div class="max-w-md mx-auto my-10 bg-white p-8 rounded shadow-md">
  <h2 class="text-2xl font-medium mb-4">Create an Account</h2>
  <ValidForm submitText="Create Account" onSuccess={() => goto('/account')}>
    <ValidInput
      label="Select an account type"
      name="accountType"
      type="email"
      elementType="select"
      required
    >
      {#each Object.entries(ACCOUNT_TYPE_NAMES) as [key, value]}
        {#if value}
          <option value={key}>{value}</option>
        {/if}
      {/each}
    </ValidInput>
  </ValidForm>
</div>
