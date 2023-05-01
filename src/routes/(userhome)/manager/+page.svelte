<script lang="ts">
  //needs something to check isManager. only managers/bankify employees should be able to access this page
  import { Button, Heading, P, Span } from 'flowbite-svelte';
  import type { PageData } from './$types';
  import { commaSeparateNumber } from '$lib/utils';
  import ValidForm from '$lib/components/forms/ValidForm.svelte';
  import ValidInput from '$lib/components/forms/ValidInput.svelte';
  import { accountFormSchema, emailFormSchema } from './form';
    import UserAccount from '$lib/components/UserAccount.svelte';

  export let data: PageData;

  let dump = false;
  let querySuccess = 0;
  let queryResult: Record<string, unknown> | null = null;
  let user: unknown;
  let accounts;

  function toggleDump(){
    dump = !dump;
  }

</script>

<div class="row">
  <div class="column">
    <!-- <form>
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
    </form> -->
    <br />

    <ValidForm
      class="w-full max-w-md"
      submitText="Query"
      formSchema={emailFormSchema}
      actionName="queryByEmail"
      onSuccess={({userResult, accountResult}) => {
        querySuccess = 1;
        user = userResult;
        accounts = accountResult;
      }}
    >
      Search by Email
      <ValidInput label="" name="email" type="text" placeholder="Email" />
    </ValidForm>
    <br />
    <ValidForm
      formSchema={accountFormSchema}
      class="w-full max-w-md"
      submitText="Query"
      actionName="queryByAccount"
      onSuccess={({userResult, accountResult}) => {
        querySuccess = 2;
        user = userResult;
        accounts = accountResult;
      }}
    >
      Search by Account #
      <ValidInput label="" name="accountNumber" type="text" placeholder="Account Number" />
      <!-- <input type="submit" class = "btn" value = "Query"> -->
    </ValidForm>

    <br>
    <button on:click={toggleDump} class="btn">Dump DB</button>
  </div>
  <div class="column h-full">
    Query Results
    <div class="results">
      
      {#if querySuccess == 1}
        {user.id} {user.firstName} {user.lastName}


        {#each accounts as account}
        <div>
          {account.accountNumber} {account.currentBalance}
        </div>
        {/each}

      {:else if querySuccess == 2}
        {user.id} {user.firstName} {user.lastName}
        <div>
          {accounts.accountNumber} {accounts.currentBalance}
        </div>

      {:else}
        Welcome to the Manager Dashboard! Search for a user by their email, or for an account by
        account number!
      {/if}

      <!-- <UserAccount
        querySuccess
        queryResult
        /> -->

      
      {#if dump}
        {#each data.user as userAccount}
          <tr>
            {userAccount.firstName}
            {userAccount.id}
            {userAccount.email}
          </tr>
        {/each}
        <br />
        {#each data.trans as purchase}
          <tr>
            {purchase.id}
            {purchase.description}
          </tr>
        {/each}
      {/if}
    </div>
  </div>
</div>

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
