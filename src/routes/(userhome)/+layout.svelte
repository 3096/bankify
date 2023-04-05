<div class="navbar bg-base-100">
  <div class="flex-1">
    <a href="/" class="btn btn-ghost normal-case text-xl">Bankify</a>
  </div>
  <div class="flex-none">
    <ul class="menu menu-horizontal px-1">
      <li><a href="/dashboard">Accounts</a></li>
      <li><a href="/transfer">Transfer</a></li>
      <li><a href="/payment">Bill Pay</a></li>
      <li><a href="/account-creation">Open an Account</a></li>
      <li><a href="/logout">Log Out</a></li>
    </ul>
  </div>
</div>
<div class="w-full grow">
  <main class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
    <slot />
  </main>
</div>
