<!-- <script lang="ts">
  let imageSrc;
  let showImage2 = false;
  function retrieveImage() {
    const base64Image = sessionStorage.getItem("uploadedCheck");
    imageSrc = `data:image/png;base64,${base64Image}`;
    showImage2 = true;
    //console.log(base64Image);
  }

  let accountNo;
  let amount;
  //do stuff with an OCR to figure out accountNo and amount to deposit

</script>

<form action = "/dashboard">
  <button class="btn btn-square btn-outline">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
  </button>
</form>
<br>

<form>
  <input type = "text" placeholder = "Account Number" class = "input input-bordered">
  <input type = "text" placeholder = "Routing Number" class = "input input-bordered">
  <input type = "text" placeholder = "Check Number" class = "input input-bordered">
  <input type = "text" placeholder = "Amount" class = "input input-bordered">
  <br>
  <input type = "submit" class = "btn">
</form>
<br>

<form>
  <button class="btn" on:click = {retrieveImage}>Show uploaded image test</button>
</form>
<div>
	{#if showImage2}
		<img  src={imageSrc} alt="Preview" />
	{/if}
</div> -->
