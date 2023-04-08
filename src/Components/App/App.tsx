import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom'
import './App.css';
import Welcome from '../Welcome/Welcome';

function App() {

  return (
    <main>
      <Switch>
        <Route exact path="/" component={Welcome} />
        <Route exact path="/library" />
      </Switch>
    </main>
  );
}

export default App;
