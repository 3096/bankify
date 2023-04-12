<script>
  import ValidInput from '$lib/components/forms/ValidInput.svelte';
  import NavBar from '$lib/components/NavBar.svelte';
  import BottomNav from '$lib/components/BottomNav.svelte';

</script>

<!-- Welcome to p1
<h1>Menu Inbox Products Log out</h1>

<h1>Accounts Dashboard</h1> -->

<!-- <div class="topnav">
    <a class="active" href="#home">Home</a>
    <a href="#news">News</a>
    <a href="#contact">Contact</a>
    <a href="#about">About</a>
</div> -->


<div>
  <NavBar />
  <div class="my-3 bg-indigo-400 mx-auto card w-80 glass">
    <figure>
      <!-- <img
        src="https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWVyY2VkZXMlMjBjYXJ8ZW58MHx8MHx8&w=1000&q=80"
        alt="car!"
      /> -->
    </figure>
    <div class="card-body">
      <h2 class="card-title">Personal Checking - 4523</h2>
      <h2 class="card-title mx-auto">$ 5342.69</h2>
      <br>
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
          <tr class=" my-7">
            <td>McDonald's: Big Mac x 5</td>
            <td>$33</td>
          </tr>
          <tr>
            <td>Josh: for doing my hw</td>
            <td>$89</td>
          </tr>
          <tr>
            <td>Rent</td>
            <td>$13</td>
          </tr>
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
        <button class="btn btn-primary">Schedule now!</button>
      </div>
    </div>
  </div>
</div>
<BottomNav/>


