<script lang="ts">
  import ValidInput from "$lib/components/forms/ValidInput.svelte";
  import {  Heading, P, Button } from 'flowbite-svelte'
  import { Label, Input, Select } from 'flowbite-svelte'

  //upload and preview image: https://svelte.dev/repl/b5333059a2f548809a3ac3f60a17a8a6?version=3.31.2
  let input;
  let container;
  let image;
  let placeholder;
	let showImage = false;
  let file;
  let validType = false;

  function onChange() {
    file = input.files[0];

    if (!(file.name.endsWith(".png") || file.name.endsWith(".jpeg") || file.name.endsWith(".jpg"))) {
      console.log(file.name + " - invalid file type");
      return;
    }
		
    if (file) {
      validType = true;
      console.log(file.name);
			showImage = true;

      const reader = new FileReader();
      reader.addEventListener("load", function () {
        image.setAttribute("src", reader.result);
        const base64Image = (reader.result as string).split(',')[1];
        sessionStorage.setItem("uploadedCheck", base64Image);
        //console.log(base64Image);
      });
      reader.readAsDataURL(file);

			return;
    } 
		showImage = false; 
  }

</script>

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
  {#if file && validType}
  <a href = "/uploadCheckConfirm">
    <input type="submit" class = "btn" accept=".png, .jpeg, .jpg" value = "Submit and Continue">
  </a>
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