import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom'
import './App.css';
import Welcome from '../Welcome/Welcome';
import Library from "../Library/Library"
import { apiCalls } from '../apiCalls';

function App() {
 const [allStrains, setAllStrains] = useState([]);
  const [fetching, setFetching] = useState(false);


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
  return (
    <main>
      <Switch>
        <Route exact path="/" component={Welcome} />
        <Route exact path="/allStrains" render={() => <Library card='allStrains' fetchData={fetchData} allStrains={allStrains}/>}/>
        <Route exact path="/matches" render={() => <Library card='matches'fetchData={fetchData} allStrains={allStrains}/>}/>
        <Route exact path="/hybrids" render={() => <Library card='Hybrids' fetchData={fetchData} allStrains={allStrains}/>}/>
        <Route exact path="/sativas" render={() => <Library card='Sativas' fetchData={fetchData} allStrains={allStrains}/>}/>
        <Route exact path="/indicas" render={() => <Library card='Indicas' fetchData={fetchData} allStrains={allStrains}/>}/>
      </Switch>
    </main>
  );
}

export default App;
