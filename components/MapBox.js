import React from 'react'
import Map, {Marker, Popup} from 'react-map-gl'
import { useState } from 'react'
import getCenter from 'geolib/es/getCenter'
import "mapbox-gl/dist/mapbox-gl.css"

function MapBox({ searchResults }) {
  const [selectedLocation, setSelectedLocation] = useState({});

  const coordinates = searchResults.map((result) => ({
    longitude: result.long,
    latitude: result.lat,
  }));

  const center = getCenter(coordinates);

  const [viewport, setViewport] = useState({
    width: '100%',
    height: '100%',
    longitude: center.longitude,
    latitude: center.latitude,
    zoom: 11,
  });

  return (
    <Map mapStyle="mapbox://styles/henrybenyakov/cl41kpai8001m14n0urm00mq2" 
          mapboxAccessToken={process.env.MapboxAccessToken}
          {...viewport}
          onMove={evt => setViewport(evt.viewport)} >

          {searchResults.map((result) => (
            <div key={result.long}>
              <Marker
                longitude={result.long}
                latitude={result.lat}
                offsetLeft={-20}
                offsetTop={-10}
              >
                <p role="img" onClick={() => setSelectedLocation(result)} className='cursour-pointer text-2xl animate-bounce'>📌</p>
              </Marker>

              {selectedLocation.long === result.long ? (
                <Popup
                  onClose={() => setSelectedLocation({})}
                  closeOnClick={true}
                  latitude={result.lat}
                  longitude={result.long}
                >
                  {result.title}
                </Popup>
              ) : (
                false  
              )}
            </div>
          ))}  
    </Map>        
  );
}

export default MapBox