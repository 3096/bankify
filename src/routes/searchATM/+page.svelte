<script>
    import NavBar from '$lib/components/NavBar.svelte';
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
  </div>

  <!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>Display a map on a webpage</title>
<meta name="viewport" content="initial-scale=1,maximum-scale=1,user-scalable=no">
<link href="https://api.mapbox.com/mapbox-gl-js/v2.13.0/mapbox-gl.css" rel="stylesheet">
<script src="https://api.mapbox.com/mapbox-gl-js/v2.13.0/mapbox-gl.js"></script>
<style>
body { margin: 0; padding: 0; }
#map { position: absolute; top: 50; bottom: 50; width: 93%; height: 80%; }
</style>
</head>
<body>
<div id="map"></div>
<script>
	mapboxgl.accessToken = 'pk.eyJ1IjoibWlja2V5cHJpbWU3NDciLCJhIjoiY2xmanhpaTV5MDVlajNxbzZpNDJpYjcyNSJ9.O4yMrBklh-G21TnDwre5Ww';
    const map = new mapboxgl.Map({
        container: 'map', // container ID
        // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
        style: 'mapbox://styles/mapbox/streets-v12', // style URL
        center: [-74.5, 40], // starting position [lng, lat]
        zoom: 9 // starting zoom
    });
</script>

</body>
</html>

