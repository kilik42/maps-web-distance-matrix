
import { useRef, useEffect } from 'react';
import './App.css';
import { useState } from 'react';
import* as  tt from '@tomtom-international/web-sdk-maps';

function App() {
  const [map, setMap] = useState({});
  const mapElement = useRef(null);
  useEffect(() => {
    let map = tt.map({
      key: process.env.REACT_APP_TOMTOM_API_KEY,
      container: mapElement,
    });

    setMap(map);

      }, []); 
  return (
    <div className="App">
      <div ref={mapElement}></div>

    </div>
  );
}

export default App;
