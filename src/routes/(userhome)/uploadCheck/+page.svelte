<script lang="ts">
  import type { PageData } from './$types';
  import ValidInput from '$lib/components/forms/ValidInput.svelte';
  import ValidForm from '$lib/components/forms/ValidForm.svelte';
  import { goto } from '$app/navigation';
  import { bind, each } from 'svelte/internal';
  import { ACCOUNT_TYPE_ALLOWED_TO_DEPOSIT, formSchema } from './form';

  export let data: PageData;

  //upload and preview image: https://svelte.dev/repl/b5333059a2f548809a3ac3f60a17a8a6?version=3.31.2
  let input;
  let container;
  let image;
  let placeholder;
  let showImage = false;
  let file: Blob;
  let validType = false;

  function onChange() {
    file = input.files[0];

    if (
      !(file.name.endsWith('.png') || file.name.endsWith('.jpeg') || file.name.endsWith('.jpg'))
    ) {
      console.log(file.name + ' - invalid file type');
      return;
    }

    if (file) {
      validType = true;
      console.log(file.name);
      showImage = true;

      const reader = new FileReader();
      reader.addEventListener('load', function () {
        image.setAttribute('src', reader.result);
        const base64Image = (reader.result as string).split(',')[1];
        sessionStorage.setItem('uploadedCheck', base64Image);
        //console.log(base64Image);
      });
      reader.readAsDataURL(file);

      return;
    }
    showImage = false;
  }

  let submit = false;
  function togglesubmit() {
    submit = !submit;
  }

  let imageSrc: string;
  let showImage2 = false;
  function retrieveImage() {
    const base64Image = sessionStorage.getItem('uploadedCheck');
    imageSrc = `data:image/png;base64,${base64Image}`;
    showImage2 = true;
    //console.log(base64Image);
  }

  let accountNo: string;
  let amount: string;
  //do stuff with an OCR to figure out accountNo and amount to deposit
</script>

<div class="px-2 py-5 sm:p-6 sm:w-1/2 lg:w-1/3 sm:mx-4 lg:mx-8">
  {#if !submit}
    <form action="/dashboard">
      <button class="btn btn-square btn-outline">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          ><path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          /></svg
        >
      </button>
    </form>
    <br />

    <form>
      <div>
        <label for="myFile">Upload check (png and jpeg files only)</label>
      </div>
      <br />
      <input
        type="file"
        id="myFile"
        class="file-input file-input-bordered w-full"
        name="filename"
        accept=".png, .jpeg, .jpg"
        bind:this={input}
        on:change={onChange}
      />
      <!-- {#if file && validType}
  <a href = "/uploadCheckConfirm">
    <input type="submit" class = "btn" accept=".png, .jpeg, .jpg" value = "Submit and Continue">
  </a>
  {/if} -->
    </form>
    <br />
    <div>
      {#if showImage}
        <img bind:this={image} src="" alt="Preview" />
      {/if}
    </div>
    {#if file && validType}
      <input
        on:click={() => togglesubmit()}
        type="submit"
        class="btn mt-4 btn-primary w-full"
        accept=".png, .jpeg, .jpg"
        value="Next"
      />
    {/if}
  {:else}
    <script lang="ts">
      let showImage2 = false;
      function retrieveImage() {
        const base64Image = sessionStorage.getItem('uploadedCheck');
        imageSrc = `data:image/png;base64,${base64Image}`;
        showImage2 = true;
        //console.log(base64Image);
      }

      let accountNo;
      let amount;
      //do stuff with an OCR to figure out accountNo and amount to deposit
    </script>

    <form action="/dashboard">
      <button class="btn btn-square btn-outline">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          ><path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          /></svg
        >
      </button>
    </form>
    <ValidForm
      class="grid gap-3 mt-6 md:grid-cols-1"
      submitText="Submit"
      onSuccess={() => goto('/account/' + accountNo)}
      {formSchema}
    >
      <ValidInput
        name="depositTo"
        label="Deposit to"
        elementType="select"
        required
        bind:value={accountNo}
      >
        {#each data.accounts.filter( (account) => ACCOUNT_TYPE_ALLOWED_TO_DEPOSIT.has(account.accountType) ) as account}
          <option value={account.accountNumber.toString()}>{account.accountName}</option>
        {/each}
      </ValidInput>
      <ValidInput name="amount" label="Enter amount" type="number" required bind:value={amount}>
        <span slot="prepend">$</span>
      </ValidInput>
      <button type="button" class="btn my-4 w-full" on:click={retrieveImage}>
        Show uploaded image
      </button>
      {#if showImage2}
        <img src={imageSrc} alt="Preview" />
      {/if}
    </ValidForm>
  {/if}
</div>
