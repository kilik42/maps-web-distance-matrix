
import { useRef, useEffect } from 'react';
import './App.css';
import { useState } from 'react';
import* as  tt from '@tomtom-international/web-sdk-maps';

function App() {
  const [map, setMap] = useState({});
  const mapElement = useRef(null);
  const [longitude, setLongitude] = useState(0);
  const [latitude, setLatitude] = useState(0);

  useEffect(() => {
    let map = tt.map({
      key: process.env.REACT_APP_TOMTOM_API_KEY,
      container: mapElement,
      stylesVisibility: {
        trafficIncidents: true,
        trafficFlow: true,
      },
      center: [longitude, latitude],
      zoom: 14,

    });

    setMap(map);

      }, []); 
  return (
    <div className="app">
      <div ref={mapElement} className = "map"></div>

    </div>
  );
}

export default App;
