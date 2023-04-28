<script lang="ts">
    //needs something to check isManager. only managers/bankify employees should be able to access this page
  import { Button, Heading, P, Span } from 'flowbite-svelte';
  import type { PageData } from './$types';
  import { commaSeparateNumber } from '$lib/utils';
    import ValidForm from '$lib/components/forms/ValidForm.svelte';
    import ValidInput from '$lib/components/forms/ValidInput.svelte';
    import { accountFormSchema, emailFormSchema } from './form';

  export let data: PageData;

  let querySuccess = false;
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
    <br>

    <ValidForm
    class="w-full max-w-md"
    submitText="Query"
    formSchema = {emailFormSchema}
    actionName="queryByEmail"
    
    onSuccess={() => {
      querySuccess = true;
    }}
    >   
      Search by Email
        <ValidInput 
        label=""
        name="email"
        type="text"
        placeholder="Email"/>

    </ValidForm>
    <br>
    <ValidForm
    formSchema={accountFormSchema}
    class="w-full max-w-md"
    submitText="Query"
    actionName="queryByAccount"
    onSuccess={() => {
      querySuccess = true;
    }}
    >
        Search by Account #
        <ValidInput 
        label=""
        name="accountNumber"
        type="text"
        placeholder="Account Number"/>
        <!-- <input type="submit" class = "btn" value = "Query"> -->
    </ValidForm>
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