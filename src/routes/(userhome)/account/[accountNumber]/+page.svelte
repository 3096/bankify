<script lang="ts">
  import { commaSeparateNumber } from '$lib/utils';
  import type { PageData } from './$types';

  export let data: PageData;
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
      <h2 class="card-title mx-auto">${commaSeparateNumber(data.currentBalance)}</h2>
      <br />
      <div class="card-actions justify-end">
        <a class="btn btn-primary" href="/transfer">Transfer</a>
        <!-- <button class="btn btn-primary">Transfer</button> -->
        <button class="btn btn-primary">Info</button>
      </div>
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
            <td
              >${commaSeparateNumber(
                transaction.senderAccountNumber === data.accountNumber
                  ? -transaction.amount
                  : transaction.amount
              )}</td
            >
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