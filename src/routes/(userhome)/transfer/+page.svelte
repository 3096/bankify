<script lang="ts">
  import ValidForm from '$lib/components/forms/ValidForm.svelte';
  import ValidInput from '$lib/components/forms/ValidInput.svelte';
  import { formSchema } from './form';
  import type { PageData } from './$types';
  import { ACCOUNT_TYPE_ALLOWED_TO_SEND } from './types';
  import { commaSeparateNumber } from '$lib/utils';
  import type { BroadcastErrors } from '$lib/components/forms/types';

  export let data: PageData;
  let broadcastError: BroadcastErrors;
  let selectedAccountNumberStr = '';
  let amountStr = '';
  let recipientAccountNumberStr = '';
  let transferSuccess = false;

  $: if (selectedAccountNumberStr && amountStr) {
    const selectedAccount = data.user.accounts.find(
      (account) => account.accountNumber.toString() === selectedAccountNumberStr
    );
    const amountParse = formSchema.shape.amount.safeParse(amountStr);
    if (amountParse.success) {
      const amount = amountParse.data;
      if (amount > selectedAccount!.currentBalance) {
        broadcastError.set({ amount: ['Insufficient funds'] });
      }
    }
  }

  $: if (broadcastError) {
    if (parseInt(selectedAccountNumberStr) === parseInt(recipientAccountNumberStr)) {
      broadcastError.set({ recipientAccountNumber: ['Cannot transfer to the same account'] });
    } else {
      broadcastError.set({});
    }
  }
</script>

<div class="container flex items-center justify-center p-6 mx-auto">
  <ValidForm
    class="w-full max-w-md"
    submitText="Transfer"
    {formSchema}
    bind:broadcastError
    onSuccess={() => {
      transferSuccess = true;
    }}
  >
    <center><h1 class="text-5xl font-light tracking-tight mt-8 mb-16">Transfer Funds</h1></center>

    <div>
      <ValidInput
        name="recipientAccountNumber"
        label="Recipient's Account Number"
        type="text"
        placeholder="e.g. 1"
        bind:value={recipientAccountNumberStr}
      />
    </div>

    <div class="items-center mt-3">
      <ValidInput
        name="senderAccountNumber"
        label="Transfer from"
        elementType="select"
        bind:value={selectedAccountNumberStr}
      >
        <option disabled selected>Select an Account</option>
        {#each data.user.accounts.filter((account) => ACCOUNT_TYPE_ALLOWED_TO_SEND[account.accountType]) as account}
          <option value={account.accountNumber.toString()}>
            {account.accountName} - Balance ${commaSeparateNumber(account.currentBalance)}
          </option>
        {/each}
      </ValidInput>
    </div>

    <!-- <style>
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
    </div> -->

    <div class="mt-3">
      <ValidInput name="amount" label="Amount" type="number" bind:value={amountStr}>
        <span slot="prepend">$</span>
        <!-- <span slot="append">USD</span> -->
      </ValidInput>
    </div>

    <div class="relative flex items-center mt-3">
      <input type="checkbox" id="my-modal" class="modal-toggle" bind:checked={transferSuccess} />
      <div class="modal">
        <div class="modal-box">
          <h3 class="font-bold text-lg">Thank you for using Bankify!</h3>
          <p class="py-4">You have successfully made the transfer.</p>
          <div class="modal-action">
            <a href="/dashboard" class="btn">Return</a>
          </div>
        </div>
      </div>
    </div>
  </ValidForm>
</div>
