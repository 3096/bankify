<script lang="ts">
  import type { PageData } from './$types';

  export let data: PageData;
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

<div class="container flex items-center justify-center px-6 mx-auto">
  <form class="w-full max-w-md">
    <center><h1 class="text-5xl font-light tracking-tight mt-8 mb-16">Pay your Bill</h1></center>
    <br />
    <div class="relative flex items-center mt-6">
      <select class="select select-bordered w-full max-w-xs">
        <option disabled selected>Select Account Type</option>
        {#each data.user.accounts as account}
        <option>{account.accountNumber}---{account.accountName}</option>
        {/each}
 
      </select>
    </div>

    <style>
      .currency-wrap {
        position: relative;
      }

      .currency-code {
        position: absolute;
        left: 8px;
        top: 10px;
      }

      .text-currency {
        padding: 10px 20px;
        border: solid 1px #ccc;
        border-radius: 5px;
      }
    </style>

    <div class="relative flex items-center mt-6">
      <div class="currency-wrap">
        <span class="currency-code">$</span>
        <input type="number" class="text-currency" />
      </div>
    </div>

    
    <div class="relative flex items-center mt-6">
      <!-- The button to open modal -->
      <a href="#my-modal-2" class="btn">Pay</a>
      <!-- Put this part before </body> tag -->
      <div class="modal" id="my-modal-2">
        <div class="modal-box">
          <h3 class="font-bold text-lg">Thank you for using Bankify!</h3>
          <p class="py-4">You have successfully made a payment.</p>
          <div class="modal-action">
            <a href="/dashboard" class="btn">Return</a>
          </div>
        </div>
      </div>
    </div>
  </form>
</div>
