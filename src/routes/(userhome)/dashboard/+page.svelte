<script lang="ts">
  import { Span } from 'flowbite-svelte';
  import type { PageData } from './$types';
  import { commaSeparateNumber } from '$lib/utils';
  import { ACCOUNT_TYPE_FLIP_BALANCE } from '$lib/account';

  export let data: PageData;
  let dealsActivated = data.deals.map(() => false);
</script>

<div class="max-w-7xl mx-auto lg:px-8">
  <div class="flex flex-col lg:flex-row">
    <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8 lg:w-[72%] lg:mr-2">
      <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
        <div class="flex justify-between items-center">
          <h1 class="text-lg font-medium pl-4 lg:pl-0 mt-1 mb-4 lg:mt-4 lg:mb-3">Your Accounts</h1>
        </div>
        <div class="shadow overflow-hidden border-b border-gray-200 rounded-lg">
          <table class="min-w-full divide-y divide-gray-200">
            <tbody class="bg-white divide-y divide-gray-200">
              {#each data.user.accounts as account}
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap font-medium text-gray-500">
                    <div class="flex flex-col">
                      <div>{account.accountName}</div>
                      <div class=" text-xl text-gray-900">
                        ${commaSeparateNumber(
                          account.currentBalance * ACCOUNT_TYPE_FLIP_BALANCE[account.accountType]
                        )}
                      </div>
                    </div>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-right font-medium">
                    <a
                      href="/account/{account.accountNumber}"
                      class="text-indigo-600 hover:text-indigo-900">View</a
                    >
                  </td>
                </tr>
              {/each}
            </tbody>
          </table>
        </div>
      </div>
      <div class="py-4 align-middle inline-block min-w-full sm:px-6 lg:px-8">
        <div class="flex justify-between items-center">
          <h1 class="text-lg font-medium pl-4 lg:pl-0 mt-1 mb-4 lg:mt-4 lg:mb-3">
            Connect with Us
          </h1>
        </div>
        <div class="pl-4 lg:pl-0 whitespace-nowrap font-medium">
          <p>
            <a href="/customerrep">
              <button class="btn gap-2 btn btn-sm">
                Customer Service
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
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  /></svg
                >
              </button>
            </a>
          </p>
        </div>
      </div>
    </div>
    <div class="p-3 lg:hidden" />
    <div class="lg:w-[30%] xl:w-1/4">
      <div class="bg-gray-100 p-4 rounded-lg">
        <h2 class="text-lg font-medium mb-2">
          <Span class="text-transparent bg-clip-text bg-gradient-to-r to-purple-600 from-blue-600">
            Bankify Deals
          </Span>
        </h2>
        {#each data.deals as deal, i}
          <div class="py-4 lg:pl-2 rounded-lg border-b-2">
            <div class="flex items-center justify-between mb-2">
              <div class="flex items-center">
                <img src={deal.logo} alt="Target" class="w-8 h-8 mr-2" />
                <h3 class="text-md font-medium">{deal.name}</h3>
              </div>
              <div class="text-green-600 font-medium">{deal.deal}</div>
            </div>
            <p class="text-gray-500 mb-4">
              {deal.description}
            </p>
            <button
              class="btn bg-blue-600 hover:bg-primary-800 text-white font-bold mx-auto px-4 rounded-full border-none shadow-outline"
              on:click={() => (dealsActivated[i] = true)}
            >
              Activate
            </button>
          </div>
          <input
            type="checkbox"
            id="deal-modal-{i}"
            class="modal-toggle"
            bind:checked={dealsActivated[i]}
          />
          <div class="modal modal-bottom sm:modal-middle">
            <div class="modal-box">
              <div class="flex">
                <img src={deal.logo} alt="Target" class="w-8 h-8 mr-2" />
                <h3 class="font-bold text-lg">Congratulations!</h3>
              </div>
              <p class="py-4">
                Your deal for <strong>{deal.name}</strong> has been activated.
              </p>
              <div class="modal-action">
                <label for="deal-modal-{i}"> Close </label>
              </div>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </div>
</div>
