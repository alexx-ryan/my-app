import React from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import { useState, useMemo, useEffect } from 'react'
import Axios from 'axios';
import './App.css';
import  LoginComponent from'./LoginComponent'
import  Navbar from'./Navbar'
import Home from './Home'
import CaseList from './CaseList'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { UserContext,  } from './UserContext';


function App() {

  const [user, setUser] = useState(null);

  // useMemo makes sure the values only change when the dependencies have. This stops recalulating the values every render.
  const providerValue = useMemo(() => ({user, setUser}), [user, setUser]);

  useEffect(() => {
    if (user != null){
      
    }
}, [])

  
  return (
    <Router>
      <UserContext.Provider value={providerValue}>
      <div className="App">
      <Navbar/>
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route exact path="/login">
              <LoginComponent/>
            </Route>
          </Switch>
        </div>
      </div>
      </UserContext.Provider>
    </Router>
  );
}

export default App;
