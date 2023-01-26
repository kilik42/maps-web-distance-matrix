
import { useEffect } from 'react';
import './App.css';

function App() {
  const [map, setMap] = useState({});

  useEffect(() => {
    let map = tt.map({
      key: process.env.REACT_APP_TOMTOM_API_KEY,
      container: mapElement,
    });

    setMap(map);

      }, []); 
  return (
    <div className="App">
      

    </div>
  );
}

export default App;
