<script>
  import ValidInput from "$lib/components/forms/ValidInput.svelte";
  import {  Heading, P, Button } from 'flowbite-svelte'
  import { Label, Input, Select } from 'flowbite-svelte'



  /**
   * @type {any}
   */
  let selected;

  let accountType = [
    {value:"CA", name: "Checking Account"},
    {value:"SA", name: "Savings Account"},
  ]

</script>

<form action = "/dashboard">
<button class="btn btn-square btn-outline">
    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
  </button>
</form>


<div  class="text-center">

  <Heading tag="h1" class="mb-4" customSize="text-3xl font-bold  md:text-3xl lg:text-3xl">Pay your Bills</Heading>

  <P class="mb-6 text-lg lg:text-xl sm:px-16 xl:px-48  dark:text-gray-400">Account Type</P>
</div>


<Label>Select an option
  <Select class="mt-2" items={accountType} bind:value={selected} />
</Label>


<div class='mb-6'>
  <Label for='default-input' class='block mb-2'>Amount</Label>
  <Input id='default-input' placeholder="$" />
</div>

<Button href="/dashboard">Home</Button>   <Button href="/">Continue</Button>



