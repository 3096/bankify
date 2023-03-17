<script>
  import { goto } from '$app/navigation';
  import ValidForm from '$lib/components/forms/ValidForm.svelte';
  import ValidInput from '$lib/components/forms/ValidInput.svelte';
</script>

<img class="mx-auto h-12 w-auto px-4 object-contain mt-12 mb-14" src="icon.png" alt="Bankify" />

<div class="sm:flex sm:justify-center">
  <div
    class="w-full px-4 py-5 sm:p-6 sm:w-1/2 lg:w-1/3 sm:mx-4 lg:mx-8 bg-white overflow-hidden shadow-md rounded-lg"
  >
    <ValidForm
      class="grid gap-6 mb-6 md:grid-cols-1"
      submitText="Login"
      onSuccess={() => goto('/dashboard')}
    >
      <ValidInput name="email" label="Email" type="email" required />
      <ValidInput name="password" label="Password" type="password" required />
    </ValidForm>
    <div class="flex">
      <span>
        Need an account?<a href="/register" class="ml-1.5 text-blue-500 hover:text-primary-800"
          >Register</a
        >
      </span>
    </div>
  </div>
</div>
