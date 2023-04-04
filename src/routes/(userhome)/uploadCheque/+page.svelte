<script>
    import ValidInput from "$lib/components/forms/ValidInput.svelte";

</script>



<!-- Welcome to p1
<h1>Menu Inbox Products Log out</h1>

<h1>Accounts Dashboard</h1> -->

<div class="topnav">
  <a class="active" href="#home">Home</a>
  <a href="#news">News</a>
  <a href="#contact">Contact</a>
  <a href="#about">About</a>
</div>

<br>
<form action = "/dashboard">
  <button class="btn btn-square btn-outline">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
  </button>
</form>
<br>

<form>
  <label for = "myFile">Upload check (png and jpeg files only)</label>
  <br>
  <input type="file" id="myFile" name="filename" accept=".png, .jpeg, .jpg">
  <input type="submit" accept=".png, .jpeg, .jpg">
</form>