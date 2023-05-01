<script lang="ts">
  import { type SubmitFunction, enhance } from '$app/forms';
  import type { FormErrorData } from '$lib/components/forms/types';
  import type { FormResult } from './form';
  import type { PageData } from './$types';
  import { commaSeparateNumber } from '$lib/utils';

  export let data: PageData;

  let apiKey: string | null = null;

  const enhanceForm = (() =>
    ({ result }) => {
      if (result.type === 'success') {
        apiKey = result.data!.apikey;
      } else {
        console.error(result);
      }
    }) satisfies SubmitFunction<FormResult, FormErrorData>;

  const copyApiKey = () => {
    navigator.clipboard.writeText(apiKey!);
  };
</script>

<div class="container mx-auto py-10">
  <h1 class="text-3xl font-bold mb-5">Partner Account Dashboard</h1>
  <!-- API Key Section -->
  <div class="mb-5">
    <h2 class="text-lg font-bold mb-3">API Key</h2>
    <div class="bg-gray-200 p-3 rounded-lg">
      <div class="flex justify-between items-center">
        {#if apiKey}
          <p class="text-green-600 font-bold">
            Your API key is: <span class="text-gray-600">{apiKey}</span>
          </p>
          <button class="btn btn-primary" on:click={copyApiKey}> Copy </button>
        {:else}
          <p class="text-gray-800 font-semibold ml-2">
            For security purposes, if you lost access to your API key, you must generate a new one.
          </p>
          <form method="POST" use:enhance={enhanceForm}>
            <button class="btn btn-primary"> New API Key </button>
          </form>
        {/if}
      </div>
      <!-- <div class="flex justify-end mt-3" /> -->
    </div>
  </div>
  <!-- API Logs Section -->
  <div>
    <h2 class="text-lg font-bold mb-3">API Transaction Logs</h2>
    <table class="table-auto w-full">
      <thead>
        <tr>
          <th class="px-4 py-2">Customer</th>
          <th class="px-4 py-2">Amount</th>
          <th class="px-4 py-2">Type</th>
          <th class="px-4 py-2">Description</th>
          <th class="px-4 py-2">Date</th>
        </tr>
      </thead>
      <tbody>
        {#each data.transactions as transaction}
          <tr>
            <td class="border px-4 py-2"
              >{transaction.senderAccountNumber === data.accountNumber
                ? transaction.recipientAccountNumber
                : transaction.senderAccountNumber}</td
            >
            <td class="border px-4 py-2"
              >{transaction.senderAccountNumber === data.accountNumber
                ? commaSeparateNumber(-transaction.amount)
                : commaSeparateNumber(transaction.amount)}</td
            >
            <td class="border px-4 py-2">{transaction.transactionType}</td>
            <td class="border px-4 py-2">{transaction.description}</td>
            <td class="border px-4 py-2">{transaction.timeStamp}</td>
          </tr>
        {/each}
      </tbody>
    </table>
  </div>
</div>
