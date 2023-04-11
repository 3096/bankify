
<form action = "/dashboard">
  <button class="btn btn-square btn-outline">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
    </button>
  </form>
          

  <div class="container flex items-center justify-center min-h-screen px-6 mx-auto">
      <form class="w-full max-w-md">

        <center><h1 class="text-5xl font-bold">Transfer Funds</h1></center>
<br>
<br>
<br>

        <div>
          <label for="username" class="block text-sm text-black dark:text-black">Recipient's Account Number</label>
      
          <input type="text" placeholder="e.g. 1" class="block  mt-2 w-full placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300" />
      </div>

      <div class="relative flex items-center mt-6">
        <select class="select select-bordered w-full max-w-xs">
          <option disabled selected>Select Account Type</option>
          <option>Checkings</option>
          <option>Savings</option>
        </select>
      </div>
      

                  

        <style>
          .currency-wrap{
            position:relative;
          }
          
          .currency-code{
            position:absolute;
            left:8px;
            top:10px;
          }
          
          .text-currency{
            padding:10px 20px;
            border:solid 1px #ccc;
            border-radius:5px;
          }
        </style>
        
        <div class="relative flex items-center mt-6">
        <div class="currency-wrap">
          <span class="currency-code">$</span>
          <input type="number" class="text-currency"/>
        </div>
        </div>
  
        <div class="relative flex items-center mt-6">

        <!-- The button to open modal -->
<a href="#my-modal-2" class="btn">Transfer</a>
<!-- Put this part before </body> tag -->
<div class="modal" id="my-modal-2">
  <div class="modal-box">
    <h3 class="font-bold text-lg">Thank you for using Bankify!</h3>
    <p class="py-4">You have successfully made the transfer. </p>
    <div class="modal-action">
     <a href="/dashboard" class="btn">Return</a>
    </div>
  </div>
  </div>
</div>
      </form>
  </div>
