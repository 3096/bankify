<script>
  import ValidForm from '$lib/components/forms/ValidForm.svelte';
  import ValidInput from '$lib/components/forms/ValidInput.svelte';
    // import { Dropdown } from 'flowbite-svelte';
  import formSchema from "../register/form-schema";
  // import icon from "./icon.png";

  import {Button,  Dropdown, DropdownItem, DropdownDivider, DropdownHeader } from 'flowbite-svelte'

</script>


<!-- Welcome to p1
<h1>Menu Inbox Products Log out</h1>

<h1>Accounts Dashboard</h1>
 -->


<div class="topnav" style="background-color:pink">
    <!-- It would be really cool if this disappeared on a scroll -->
    
    <h1> Bankify,.....   maybe a settings image here with absolute positioning? and turn the profile image incon into a link?</h1>

    <a class="active" href="#menu">Menu</a>
    <a href="#home">Home</a>

    <h1>This is the cool home page!</h1>
    

    <!-- <ValidForm class="grid gap-6 mb-6 md:grid-cols-1" submitText="Register" {formSchema}>
      <ValidInput name="name" label="Name" type="text" required />
      <ValidInput name="email" label="Email" type="email" required />
      <ValidInput name="password" label="Password" type="password" required />
    </ValidForm> -->
  
    <input placeholder="ValidInput kinda goated">
    <br>
    <br>
    Welcome to Dank-, I mean, Bankify!
    <a href="#contact">Search</a>

    <br>
    <Button>Dropdown button</Button>
    <Dropdown >
      <DropdownItem>Dashboard</DropdownItem>
      <DropdownItem>Settings</DropdownItem>
      <DropdownItem>Earnings</DropdownItem>
      <DropdownItem>Sign out</DropdownItem>
    </Dropdown>

    <br>
    <br>
    <Button>Back</Button>
    <Button>Next</Button>
  </div>
