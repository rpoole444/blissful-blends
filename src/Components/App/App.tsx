import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom'
import './App.css';
import Welcome from '../Welcome/Welcome';
import Library from "../Library/Library"
import { apiCalls } from '../apiCalls';

function App() {
  const [allStrains, setAllStrains] = useState([]);
  const [fetching, setFetching] = useState(false);
  const [favorites, setFavorited] = useState <Array<any>>(() => JSON.parse(localStorage.getItem("favorites") || "[]"))


  const fetchData = (): void => {
    apiCalls.getAllStrains()
      .then(data => setAllStrains(data))
      .catch(err => console.error(err));
  };

  useEffect(() => {
    if (!fetching) {
      fetchData();
      setFetching(true);
    }
   
  }, [fetching]);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites))
  }, [favorites])
  return (
    <main>
      <Switch>
        <Route exact path="/" component={Welcome} />
        <Route exact path="/allStrains" render={() => <Library card='allStrains' setFavorited={setFavorited} favorites={favorites} fetchData={fetchData} allStrains={allStrains}/>}/>
        <Route exact path="/matches" render={() => <Library card='matches' setFavorited={setFavorited} favorites={favorites} fetchData={fetchData} allStrains={allStrains}/>}/>
        <Route exact path="/hybrids" render={() => <Library card='Hybrids' setFavorited={setFavorited} favorites={favorites} fetchData={fetchData} allStrains={allStrains}/>}/>
        <Route exact path="/sativas" render={() => <Library card='Sativas' setFavorited={setFavorited} favorites={favorites} fetchData={fetchData} allStrains={allStrains}/>}/>
        <Route exact path="/sativas" render={() => <Library card='Indicas' setFavorited={setFavorited} favorites={favorites} fetchData={fetchData} allStrains={allStrains}/>}/>
      </Switch>
    </main>
  );
}

export default App;
