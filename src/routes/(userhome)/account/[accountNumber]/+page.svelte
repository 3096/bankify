<script lang="ts">
  import { ACCOUNT_TYPE_FLIP_BALANCE } from '$lib/account';
  import { commaSeparateNumber } from '$lib/utils';
  import type { PageData } from './$types';

  export let data: PageData;

  const flipBalance = ACCOUNT_TYPE_FLIP_BALANCE[data.accountType];
</script>

<div>
  <div class="my-3 bg-indigo-400 mx-auto card w-80 glass">
    <figure>
      <!-- <img
        src="https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWVyY2VkZXMlMjBjYXJ8ZW58MHx8MHx8&w=1000&q=80"
        alt="car!"
      /> -->
    </figure>
    <div class="card-body">
      <h2 class="card-title">{data.accountName}</h2>
      <h2 class="card-title mx-auto">${commaSeparateNumber(data.currentBalance * flipBalance)}</h2>
      <br />

      <!-- <button class="btn btn-primary">Transfer</button> -->

      <div
        tabindex="-1"
        class="collapse collapse-plus border border-base-50 bg-base-50 rounded-box mb-4"
      >
        <div class="collapse-title text-s font-medium">Show Account #</div>
        <div class="collapse-content">
          <td>{data.accountNumber}</td>
        </div>
      </div>
      <center>
        {#if flipBalance > 0}
          <a class="btn btn-primary" href="/transfer?from={data.accountNumber}">Transfer</a>
          <a class="btn btn-primary ml-2" href="/uploadCheck?to={data.accountNumber}">Deposit</a>
        {:else}
          <a class="btn btn-primary" href="/payment?to={data.accountNumber}">Make payment</a>
        {/if}
      </center>
    </div>
  </div>
  <div class=" my-3 bg-indigo-400 mx-auto card w-80 glass">
    <figure>
      <!-- <img
        src="https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWVyY2VkZXMlMjBjYXJ8ZW58MHx8MHx8&w=1000&q=80"
        alt="car!"
      /> -->
    </figure>
    <div class="card-body">
      <h2 class="card-title mx-auto">Your Transactions</h2>
      <table class="table-fixed">
        {#each data.transactions as transaction}
          <tr>
            <td>{transaction.description}</td>
            <td>
              ${commaSeparateNumber(
                transaction.senderAccountNumber === data.accountNumber
                  ? -(transaction.amount * flipBalance)
                  : transaction.amount * flipBalance
              )}
            </td>
          </tr>
        {/each}
      </table>
    </div>
  </div>
  <div class=" my-3 bg-indigo-400 mx-auto card w-80 glass">
    <figure>
      <!-- <img
        src="https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWVyY2VkZXMlMjBjYXJ8ZW58MHx8MHx8&w=1000&q=80"
        alt="car!"
      /> -->
    </figure>
    <div class="card-body">
      <h2 class="card-title">Schedule Appointment</h2>
      <p>Meet with one of our representatives!</p>
      <div class="card-actions justify-end">
        <a class="btn btn-primary" href="/customerrep">Schedule Now!</a>
      </div>
    </div>
  </div>
</div>
