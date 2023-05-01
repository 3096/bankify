<script lang="ts">
  import type { LayoutData } from './$types';

  export let data: LayoutData;
</script>

<div class="navbar bg-base-100">
  <div class="flex-1">
    <a href="/" class="btn btn-ghost normal-case text-xl">Bankify</a>
  </div>
  <div class="flex-none">
    <ul class="menu menu-horizontal px-1">
      <li><a href="/searchATM">Search ATM</a></li>
      <li><a href="/manager">Manager</a></li>
      
        <div class="flex-none">
          <ul class="menu menu-horizontal px-1">
            <li tabindex="0">
              <a>
                Pay and Transfer
                <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
              </a>
              <ul class="p-2 bg-base-100">
                <li><a href="/transfer">Transfer</a></li>
                <li><a href="/payment">Bill Pay</a></li>
              </ul>
            </li>
          </ul>
        </div>

        <div class="flex-none">
          <ul class="menu menu-horizontal px-1">
            <li tabindex="0">
              <a>
                Account Options
                <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
              </a>
              <ul class="p-2 bg-base-100">
                <li><a href="/uploadCheck" target="_parent">Upload Check</a></li>
                <li><a href="/account-creation">Open an Account</a></li>
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
<div class="w-full grow">
  <main class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
    <slot />
  </main>
</div>
