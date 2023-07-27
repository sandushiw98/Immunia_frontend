
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
