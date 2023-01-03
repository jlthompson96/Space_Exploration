import { useState, useEffect } from 'react';
import Apod from './components/apod/apod';
import { NASA_API_URL } from './api';

function App() {
  const [apod, setApod] = useState(null);

  const getApodData = async () => {
    const response = await fetch(NASA_API_URL)
    .then((response) => response.json())
    setApod(response);
  };

  useEffect(() => {
    getApodData()}, []);

  return (
    <div className="App">
      {apod && <Apod data={apod} />}
    </div>
  );
};

export default App;
