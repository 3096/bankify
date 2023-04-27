<script>
  import ValidInput from "$lib/components/forms/ValidInput.svelte";

  //upload and preview image: https://svelte.dev/repl/b5333059a2f548809a3ac3f60a17a8a6?version=3.31.2
  let input;
  let container;
  let image;
  let placeholder;
	let showImage = false;
  let file;

  function onChange() {
    file = input.files[0];
		
    if (file) {
			showImage = true;

      const reader = new FileReader();
      reader.addEventListener("load", function () {
        image.setAttribute("src", reader.result);
      });
      reader.readAsDataURL(file);
			
			return;
    } 
		showImage = false; 
  }

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
  <div>
    <label for = "myFile">Upload check (png and jpeg files only)</label>
  </div>
  <br>
  <input type="file" id="myFile" class="file-input file-input-bordered" name="filename" accept=".png, .jpeg, .jpg" bind:this={input} on:change={onChange}>
  {#if file}
    <input type="submit" class = "btn" accept=".png, .jpeg, .jpg" value = "Submit and Continue">
  {/if}
</form>
<br>
<div>
	{#if showImage}
		<img bind:this={image} src="" alt="Preview" />
	{:else}
		<span bind:this={placeholder}>Image Preview</span>
	{/if}
</div>