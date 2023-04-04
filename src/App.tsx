import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [allStrains, setAllStrains] = useState([])
  const [ fetching, setFetch] = useState(false)

  const fetchData = () => {
     const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'ac28959b90msh7dc4c2861563624p14d2d8jsn569e86110699',
		'X-RapidAPI-Host': 'weed-strain1.p.rapidapi.com'
	}
};

 return fetch('https://weed-strain1.p.rapidapi.com/?ordering=-strain', options)
	.then(response => response.json())
	.then(data => setAllStrains(data))
	.catch(err => console.error(err));
  }

useEffect(() => {
  if(!fetching){
    fetchData()
    setFetch(true)
    }
}, [allStrains, fetching])
console.log("allStrains: ", allStrains)
  return (
    <div className="App">
      <h1>Blissful Blends</h1>
    </div>
  );
}

export default App;
