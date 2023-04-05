<div class="max-w-md mx-auto my-10 bg-white p-8 rounded shadow-md">
  <h2 class="text-2xl font-medium mb-4">Create an Account</h2>
  <form>
    <div class="mb-4">
      <label class="block text-gray-700 font-medium mb-2" for="name"> Name </label>
      <input
        class="form-input w-full rounded-md focus:outline-none focus:shadow-outline-blue"
        id="name"
        type="text"
        placeholder="John Doe"
        required
      />
    </div>
    <div class="mb-4">
      <label class="block text-gray-700 font-medium mb-2" for="email"> Email </label>
      <input
        class="form-input w-full rounded-md focus:outline-none focus:shadow-outline-blue"
        id="email"
        type="email"
        placeholder="johndoe@example.com"
        required
      />
    </div>
    <div class="mb-4">
      <label class="block text-gray-700 font-medium mb-2" for="password"> Password </label>
      <input
        class="form-input w-full rounded-md focus:outline-none focus:shadow-outline-blue"
        id="password"
        type="password"
        placeholder="********"
        required
      />
    </div>
    <div class="mb-4">
      <label class="block text-gray-700 font-medium mb-2" for="account-type"> Account Type </label>
      <div class="form-control">
        <label class="radio">
          <input type="radio" name="account-type" value="checking" />
          <span class="ml-2">Checking</span>
        </label>
        <label class="radio">
          <input type="radio" name="account-type" value="saving" />
          <span class="ml-2">Saving</span>
        </label>
        <label class="radio">
          <input type="radio" name="account-type" value="credit" />
          <span class="ml-2">Credit Card</span>
        </label>
      </div>
    </div>
    <button class="btn btn-primary w-full mt-4" type="submit"> Create Account </button>
  </form>
</div>
