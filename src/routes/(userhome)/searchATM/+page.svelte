<script>
  import { onMount } from 'svelte';

	const API_KEY = 'AIzaSyCL_GqGwgwNVCN3WVwkZyOevvBDgX-KCZ0';
  let map, infoWindow, directionsService, directionsRenderer;

  onMount(() => {
    // Load the Google Maps API script
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${API_KEY}&libraries=places`;
    script.async = true;
    document.head.appendChild(script);

    // Initialize the map and autocomplete when the script has loaded
    script.onload = () => {
      map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 37.7749, lng: -122.4194 }, // San Francisco
        zoom: 12
      });

      infoWindow = new google.maps.InfoWindow();
      directionsService = new google.maps.DirectionsService();
      directionsRenderer = new google.maps.DirectionsRenderer({
        map: map,
        suppressMarkers: true
      });

      const input = document.getElementById('search');
      const autocomplete = new google.maps.places.Autocomplete(input);
      autocomplete.bindTo('bounds', map);

      const marker = new google.maps.Marker({
        map,
        anchorPoint: new google.maps.Point(0, -29)
      });

      autocomplete.addListener('place_changed', () => {
        marker.setVisible(false);
        infoWindow.close();
        const place = autocomplete.getPlace();
        if (!place.geometry) {
          window.alert('No details available for input: \'' + place.name + '\'');
          return;
        }
        if (place.geometry.viewport) {
          map.fitBounds(place.geometry.viewport);
        } else {
          map.setCenter(place.geometry.location);
          map.setZoom(17);
        }
        marker.setPosition(place.geometry.location);
        marker.setVisible(true);

        // Perform a nearby search for Chase ATMs
        const request = {
          location: place.geometry.location,
          radius: 5000, // 5 km
          type: 'atm',
          keyword: 'chase'
        };
        const service = new google.maps.places.PlacesService(map);
        service.nearbySearch(request, (results, status) => {
          if (status === google.maps.places.PlacesServiceStatus.OK) {
            for (let i = 0; i < results.length; i++) {
              createMarker(results[i]);
            }
          }
        });
      });

      function createMarker(place) {
        const marker = new google.maps.Marker({
          map,
          position: place.geometry.location,
          icon: {
            url: 'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/atm-71.png',
            size: new google.maps.Size(35, 35),
            origin: new google.maps.Point(0, 0),
            anchor: new google.maps.Point(17, 34),
            scaledSize: new google.maps.Size(25, 25)
          }
        });

        google.maps.event.addListener(marker, 'click', () => {
          infoWindow.setContent(place.name);
          infoWindow.open(map, marker);

          // Calculate and display directions from the searched location to the ATM
          const destination = {
            placeId: place.place_id,
            location: place.geometry.location
          };
          const request = {
            origin: marker.getPosition(),
            destination: destination,
            travelMode: 'DRIVING'
          };
          directionsService.route(request, (result, status) => {
            if (status == 'OK') {
              directionsRenderer.setDirections(result);
              const route = result.routes[0];
              const summaryPanel = document.getElementById('directions');
              summaryPanel.innerHTML = '';
              //
              // For each route, display summary information.
              for (let i = 0; i < route.legs.length; i++) {
                const routeSegment = i + 1;
                summaryPanel.innerHTML += '<b>Route Segment: ' + routeSegment +
                  '</b><br>';
                summaryPanel.innerHTML += route.legs[i].start_address + ' to ';
                summaryPanel.innerHTML += route.legs[i].end_address + '<br>';
                summaryPanel.innerHTML += route.legs[i].distance.text + '<br><br>';
              }
            } else {
              window.alert('Directions request failed due to ' + status);
            }
          });
        });
      }
    };
  });
</script>

<style>
  #map {
    height: 600px;
    margin-bottom: 20px;
  }
  #search {
    width: 300px;
    margin-right: 10px;
  }
  #directions {
    background-color: #f5f5f5;
    border: 1px solid #ddd;
    padding: 10px;
    max-height: 200px;
    overflow-y: scroll;
  }
</style>

<div>
  <input type="text" id="search" placeholder="Search for a location...">
  <div id="map"></div>
  <div id="directions"></div>
</div>









<!-- <script>
  import { onMount } from 'svelte';

	const API_KEY = 'AIzaSyCL_GqGwgwNVCN3WVwkZyOevvBDgX-KCZ0';
  let map;

  onMount(() => {
    // Load the Google Maps API script
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${API_KEY}&libraries=places`;
    script.async = true;
    document.head.appendChild(script);

    // Initialize the map and autocomplete when the script has loaded
    script.onload = () => {
      map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 37.7749, lng: -122.4194 }, // San Francisco
        zoom: 12
      });

      const input = document.getElementById('search');
      const autocomplete = new google.maps.places.Autocomplete(input);
      autocomplete.bindTo('bounds', map);

      const marker = new google.maps.Marker({
        map,
        anchorPoint: new google.maps.Point(0, -29)
      });

      autocomplete.addListener('place_changed', () => {
        marker.setVisible(false);
        const place = autocomplete.getPlace();
        if (!place.geometry) {
          window.alert('No details available for input: \'' + place.name + '\'');
          return;
        }
        if (place.geometry.viewport) {
          map.fitBounds(place.geometry.viewport);
        } else {
          map.setCenter(place.geometry.location);
          map.setZoom(17);
        }
        marker.setPosition(place.geometry.location);
        marker.setVisible(true);
      });
    };
  });
</script>

<style>
  #search {
    position: absolute;
    z-index: 1;
    top: 10px;
    left: 50%;
    transform: translateX(-50%);
  }
</style>

<div id="map" style="height: 500px;"></div>

<input id="search" type="text" placeholder="Search for a location"> -->
