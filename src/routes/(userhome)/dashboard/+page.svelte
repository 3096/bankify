<script lang="ts">
  import { Button, Heading, P, Span } from 'flowbite-svelte';
  import type { PageData } from './$types';
  import { commaSeparateNumber } from '$lib/utils';

  export let data: PageData;
</script>

<div class="overflow-x-auto">
  <table class="table w-full">
    <br />
    <br />
    <br />
    <br />

    <tbody>
      {#each data.user.accounts as account}
        <tr>
          <th />
          <td>
            <a href="/account/{account.accountNumber}" class="text-3xl">{account.accountName}</a>
          </td>
          <td><P size="xl" weight="medium">${commaSeparateNumber(account.currentBalance)}</P></td>
        </tr>
      {/each}
    </tbody>
  </table>
</div>

<br />
<br />
<br />
<br />

<p style="text-align:center;">
  <Heading tag="h1" class="mb-4" customSize="text-3xl font-extrabold  md:text-3xl lg:text-4xl"
    ><Span gradient>Bankify Deals</Span></Heading
  >
</p>

<div class="flex flex-col w-full lg:flex-row">
  <div class="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center">
    <P size="3xl" weight="semibold">Target</P>
    <P size="xl" weight="medium">10% Cash Back</P>

    <form action="/targetdeal">
      <button class="btn btn-info">Activate</button>
    </form>
  </div>

  <div class="divider lg:divider-horizontal" />
  <div class="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center">
    <P size="3xl" weight="semibold">Starbucks</P>
    <P size="xl" weight="medium">5% Cash Back</P>

    <form action="/starbucksdeal">
      <button class="btn btn-info">Activate</button>
    </form>
  </div>

  <div class="divider lg:divider-horizontal" />
  <div class="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center">
    <P size="3xl" weight="semibold">Nike</P>
    <P size="xl" weight="medium">$10 off $75</P>
    <form action="/nikedeal">
      <button class="btn btn-info">Activate</button>
    </form>
  </div>
</div>
