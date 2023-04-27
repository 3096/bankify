<script lang="ts">
    //needs something to check isManager. only managers/bankify employees should be able to access this page
  import { Button, Heading, P, Span } from 'flowbite-svelte';
  import type { PageData } from './$types';
  import { commaSeparateNumber } from '$lib/utils';

  export let data: PageData;
</script>

<style>
  .column {
  float: left;
  width: 50%;
}

.results {
  background-color: lightgray;
  height: calc(100vh - 202px);
  }
</style>

<div class = "row">
  <div class = "column">
    <form>
        Search by User
        <br>
        <input type="text" placeholder="First Name">
        <input type="text" placeholder="Last Name">
        <br>
        <br>
        <input type="text" placeholder="Email">
        <input type="text" placeholder="Phone Number">
        <br>
        <input type="submit" class = "btn" value = "Query">
    </form>
    <br>
    <form>
        Search by Account
        <br>
        <input type="text" placeholder="Account Number">
        <select class="select select-bordered">
          <option selected>Select Account Type</option>
          <option>Checking</option>
          <option>Savings</option>
          <option>Credit</option>
          <option>Loan</option>
        </select>
        <br>
        <input type="submit" class = "btn" value = "Query">
    </form>
  </div>
  <div class = "column h-full">Query Results
    <div class = "results">
      {#each data.user as userAccount}
        <tr>
          {userAccount.firstName} {userAccount.id}
        </tr>
      {/each}
      <br>
      {#each data.trans as purchase}
      <tr>
        {purchase.id} {purchase.description}
      </tr>
      {/each}
    </div>
  </div>
</div>