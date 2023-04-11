<script lang="ts">
    //needs something to check isManager. only managers/bankify employees should be able to access this page

</script>

<div>
    <form>
        Search by User
        <br>
        <input type="text" placeholder="First Name">
        <input type="text" placeholder="Last Name">
        <br>
        <br>
        <input type="text" placeholder="Email">
        <input type="text" placeholder="Phone Number">
    </form>
    <br>
    <form>
        Search by Account
        <br>
        <input type="text" placeholder="Account Number">
        <select class="select select-bordered">
            <option selected>Select Account Type</option>
            <option>Checking</option>
            <option>Savings</option>
            <option>Credit</option>
            <option>Loan</option>
          </select>
    </form>
</div>