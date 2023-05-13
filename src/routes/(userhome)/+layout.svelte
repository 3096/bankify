<script lang="ts">
  import type { LayoutData } from './$types';

  export let data: LayoutData;
</script>

<div class="navbar bg-base-100 hidden lg:flex">
  <div class="flex-1">
    <a href="/" class="btn btn-ghost normal-case text-xl">Bankify</a>
  </div>
  <div class="flex-none">
    <ul class="menu menu-horizontal px-1">
      <li><a href="/searchATM">Search ATM</a></li>
      <li><a href="/account-creation">Open an Account</a></li>

      <div class="flex-none">
        <ul class="menu menu-horizontal px-1">
          <li tabindex="-1">
            <div>
              Account Options
              <svg
                class="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
              </svg>
            </div>
            <ul class="p-2 bg-base-100 z-10 shadow-lg border-t-2">
              <li><a href="/transfer">Transfer</a></li>
              <li><a href="/payment">Bill Pay</a></li>
              <li><a href="/uploadCheck">Deposit Check</a></li>
            </ul>
          </li>
        </ul>
      </div>

      {#if data.user.isManager}
        <li><a href="/manager">Manager Dashboard</a></li>
      {/if}
      {#if data.user.isPartner}
        <li><a href="/partnerdash">Partner Dashboard</a></li>
      {/if}
      <li><a href="/logout">Log Out</a></li>
    </ul>
  </div>
</div>

<div class="navbar bg-base-100 lg:hidden">
  <div class="navbar-start">
    <div class="dropdown">
      <div tabindex="-1" class="btn btn-ghost btn-circle">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          class="inline-block w-5 h-5 stroke-current"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </div>
      <ul
        tabindex="-1"
        class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
      >
        <li><a href="/transfer">Transfer</a></li>
        <li><a href="/payment">Bill Pay</a></li>
        <li><a href="/uploadCheck">Deposit Check</a></li>
        <li><a href="/account-creation">Open an Account</a></li>
        <li><a href="/searchATM">Search ATM</a></li>
      </ul>
    </div>
  </div>
  <div class="navbar-center">
    <a href="/dashboard" class="btn btn-ghost normal-case text-xl">Bankify</a>
  </div>
  <div class="navbar-end">
    <button class="btn btn-ghost btn-circle">
      <a href="/logout">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          class="bi bi-box-arrow-right"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z"
          />
          <path
            fill-rule="evenodd"
            d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"
          />
        </svg>
      </a>
    </button>
  </div>
</div>

<div class="w-full grow">
  <main class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
    <slot />
  </main>
</div>
