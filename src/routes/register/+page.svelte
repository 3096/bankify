<script lang="ts">
  import ValidForm from '$lib/components/forms/ValidForm.svelte';
  import ValidInput from '$lib/components/forms/ValidInput.svelte';
  import formSchema from './form-schema';
</script>

<div
  class="container rounded-xl w-full my-4 mx-auto bg-gradient-to-r border border-gray-200 p-4 sm:p-6 shadow-md"
>
  <ValidForm class="grid gap-6 mb-6 md:grid-cols-1" submitText="Register" {formSchema}>
    <ValidInput name="name" label="Name" type="text" required />
    <ValidInput name="email" label="Email" type="email" required />
    <ValidInput name="password" label="Password" type="password" required />
  </ValidForm>
</div>
