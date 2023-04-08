<script lang="ts">
  let imageSrc;
  let showImage = false;
  function retrieveImage() {
    const base64Image = sessionStorage.getItem("uploadedCheck");
    imageSrc = `data:image/png;base64,${base64Image}`;
    showImage = true;
  }
</script>

<form action = "/dashboard">
  <button class="btn btn-square btn-outline">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
  </button>
</form>
<br>

<form>
  <button class="btn" on:click = {retrieveImage}>Show uploaded image test</button>
</form>
<div>
	{#if showImage}
		<img bind:this={imageSrc} src="" alt="Preview" />
	{/if}
</div>
