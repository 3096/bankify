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
    <Heading tag="h1" class="mb-4" customSize="text-4xl font-normal  md:text-5xl lg:text-2xl">Transfer Funds</Heading>

    <P class="mb-6 text-lg lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">Recipient</P>
  </div>

  <div class="mb-6">
    <Label for="input-group-1" class="block mb-2">Enter Recipient's Email</Label>
    <Input id="email" type="email" placeholder="name@flowbite.com">
    <svg slot="left" aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
    </Input>
  </div>

  
  <Label>Select an option
    <Select class="mt-2" items={accountType} bind:value={selected} />
  </Label>


  <div class='mb-6'>
    <Label for='default-input' class='block mb-2'>Amount</Label>
    <Input id='default-input' placeholder="$" />
  </div>

 <Button href="/">Continue</Button>


  