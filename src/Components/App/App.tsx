import React, { useState, useEffect } from 'react';

import './App.css';
import Welcome from '../Welcome/Welcome';

function App() {
  const [allStrains, setAllStrains] = useState([])
  const [ fetching, setFetch] = useState(false)

const fetchData = () => {
   if (!process.env.REACT_APP_RAPIDAPI_KEY) {
    console.error('API key not found. Please set the REACT_APP_RAPIDAPI_KEY environment variable.');
    return;
  }
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_RAPIDAPI_KEY,
      'X-RapidAPI-Host': 'weed-strain1.p.rapidapi.com'
    }
  };

  return fetch('https://weed-strain1.p.rapidapi.com/?ordering=-strain', options)
    .then(response => response.json())
    .then(data => setAllStrains(data))
    .catch(err => console.error(err));
};

useEffect(() => {
  if(!fetching){
    fetchData()
    setFetch(true)
  }
}, [allStrains, fetching]);
console.log("allStrains: ", allStrains)
  return (
    <main>
      <Welcome />
    </main>
  );
}

export default App;
