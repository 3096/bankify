<script lang="ts">
  import { goto } from '$app/navigation';
  import ValidForm from '$lib/components/forms/ValidForm.svelte';
  import ValidInput from '$lib/components/forms/ValidInput.svelte';
  import formSchema from './form-schema';
</script>

<a href="/"
  ><img
    class="mx-auto h-12 w-auto px-4 object-contain mt-12 mb-14"
    src="icon.png"
    alt="Bankify"
  /></a
>
<div class="sm:flex sm:justify-center">
  <div
    class="w-full px-4 py-5 sm:p-6 sm:w-1/2 lg:w-1/3 sm:mx-4 lg:mx-8 bg-white overflow-hidden shadow-md rounded-lg"
  >
    <h3 class="text-2xl leading-6 tracking-tight font-extralight mb-3.5 text-center">
      Join Bankify today
    </h3>
    <ValidForm
      class="grid gap-6 mb-2 md:grid-cols-1"
      submitText="Register"
      {formSchema}
      onSuccess={() => goto('/dashboard')}
    >
      <ValidInput name="name" label="Name" type="text" required />
      <ValidInput name="email" label="Email" type="email" required />
      <ValidInput name="password" label="Password" type="password" required />
    </ValidForm>
    <div class="mt-6">
      <a href="/" class="text-blue-500 hover:text-primary-800 transition duration-200 ease-in-out"
        >Return to login</a
      >
    </div>
  </div>
</div>
