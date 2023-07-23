// import React, { useEffect } from 'react';

// const Map = () => {
//   useEffect(() => {
//     // Load Google Maps API asynchronously
//     const script = document.createElement('script');
//     script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyBRPKt-1iXwpMxrhp_F8chXI85l9fRnxwo&callback=initMap`;
//     script.async = true;
//     window.initMap = initMap; // Assign the initMap function to the global scope
//     document.body.appendChild(script);

//     // Make sure to clean up the script tag on unmount to avoid memory leaks
//     return () => {
//       document.body.removeChild(script);
//       delete window.initMap; // Clean up the global scope
//     };
//   }, []);

//   function initMap() {
//     const mapOptions = {
//       center: new window.google.maps.LatLng(6.9178, 79.8747),
//       zoom: 12
//     };

//     const map = new window.google.maps.Map(document.getElementById('map'), mapOptions);
//   }

//   return (
//     <div id="container">
//       <div id="map" style={{ height: '80vh', width: '80vw' }}></div>
//     </div>
//   );
// };

// export default Map;


// import React, { useEffect, useRef } from 'react';

// const Map = () => {
//   const mapRef = useRef(null);
//   const searchInputRef = useRef(null);

//   useEffect(() => {
//     // Load Google Maps API asynchronously
//     const script = document.createElement('script');
//     script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyBzfcrw1RPLl0p5Y2N44_C8shX1gyEuiP4&libraries=places&callback=initMap`;
//     script.async = true;
//     window.initMap = initMap; // Assign the initMap function to the global scope
//     document.body.appendChild(script);

//     // Make sure to clean up the script tag on unmount to avoid memory leaks
//     return () => {
//       document.body.removeChild(script);
//       delete window.initMap; // Clean up the global scope
//     };
//   }, []);

//   function initMap() {
//     const mapOptions = {
//       center: new window.google.maps.LatLng(6.9178, 79.8747),
//       zoom: 12
//     };

//     mapRef.current = new window.google.maps.Map(document.getElementById('map'), mapOptions);
//   }

//   function searchLocation() {
//     const input = searchInputRef.current.value;
//     const searchService = new window.google.maps.places.PlacesService(mapRef.current);

//     searchService.textSearch(
//       {
//         query: input,
//         bounds: mapRef.current.getBounds()
//       },
//       (results, status) => {
//         if (status === window.google.maps.places.PlacesServiceStatus.OK && results && results.length > 0) {
//           const place = results[0];
//           const location = place.geometry.location;
//           mapRef.current.setCenter(location);
//           new window.google.maps.Marker({
//             map: mapRef.current,
//             position: location
//           });
//         } else {
//           console.log('Location not found');
//         }
//       }
//     );
//   }

//   return (
//     <div id="container">
//       <div>
//         <input type="text" ref={searchInputRef} placeholder="Search location" />
//         <button onClick={searchLocation}>Search</button>
//       </div>
//       <div id="map" style={{ height: '80vh', width: '80vw' }}></div>
//     </div>
//   );
// };

// export default Map;

import React, { useRef } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';
import "./Map.css";


const MapContainer = (props) => {
  const mapRef = useRef(null);
  const searchInputRef = useRef(null);

  function initMap(mapProps, map) {
    mapRef.current = map;
  }

  function searchLocation() {
    const input = searchInputRef.current.value;
    const searchService = new props.google.maps.places.PlacesService(mapRef.current);

    searchService.textSearch(
      {
        query: input,
        bounds: mapRef.current.getBounds()
      },
      (results, status) => {
        if (status === props.google.maps.places.PlacesServiceStatus.OK && results && results.length > 0) {
          const place = results[0];
          const location = place.geometry.location;
          mapRef.current.setCenter(location);
          new props.google.maps.Marker({
            map: mapRef.current,
            position: location
          });
        } else {
          console.log('Location not found');
        }
      }
    );
  }

  return (
    <div id="container">
      <div>

        <input class ="search" type="text" ref={searchInputRef} placeholder="Search location" />
        <button class= "searchbtn" onClick={searchLocation}>Search</button>
      </div>
      <Map
        google={props.google}
        style={{ height: '60vh', width: '45vw' }}
        initialCenter={{ lat: 6.9178, lng: 79.8747 }}
        zoom={12}
        onReady={initMap}
      />
    </div>
  );
};

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBzfcrw1RPLl0p5Y2N44_C8shX1gyEuiP4'
})(MapContainer);
