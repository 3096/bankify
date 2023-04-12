<script>
	import { onMount } from 'svelte';
  
	const API_KEY = 'AIzaSyCL_GqGwgwNVCN3WVwkZyOevvBDgX-KCZ0';
  
	onMount(() => {
	  // Load the Google Maps API script
	  const script = document.createElement('script');
	  script.src = `https://maps.googleapis.com/maps/api/js?key=${API_KEY}`;
	  script.async = true;
	  document.head.appendChild(script);
  
	  // Initialize the map when the script has loaded
	  script.onload = () => {
		const map = new google.maps.Map(document.getElementById('map'), {
		  center: { lat: 37.7749, lng: -122.4194 }, // San Francisco
		  zoom: 12
		});
	  };
	});
  </script>
  
  <div id="map" style="height: 500px;"></div>





  
  <!-- DO NOT TOUCH: This is for in case some crazy shit goes down -->


  <!-- <script>
    import NavBar from '$lib/components/NavBar.svelte';
// Initialize and add the map
    function initMap() {
        // The location of Uluru
        const casa = { lat: 37.317560, lng: -121.772160 };
        // The map, centered at Uluru
        const map = new google.maps.Map(document.getElementById("map"), {
            zoom: 10,
            center: casa,
        });
        // The marker, positioned at Uluru
        const marker = new google.maps.Marker({
            position: casa,
            map: map,
        });
    }

    window.initMap = initMap;

    var script = document.createElement('script');
    script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyBIM43TX603u32yGJNP-hXJcHvYlgtETFs&callback=initMap';
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);


</script>
  

 <div>
    <NavBar />
  </div>

<div id="map"></div> -->
  