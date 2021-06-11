import React, { useEffect, useState } from 'react';
import './App.css';
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { All_info } from './components/All_info'
import { Login } from './components/Login'
import { About } from './components/About'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {

  //a call back function to get updated uuid from login page
  const [uuid, set_uuid] = useState("")
  function handle_uuid(newValue) {
    set_uuid(newValue);
  }

  const [authorized, set_authorized] = useState(false)
  function handle_authorized(newValue) {
    set_authorized(newValue);
  }

  return (

    <Router>

      <Switch>

        <Route exact path="/">
          <Login uuid={uuid} handle_uuid={handle_uuid} handle_authorized={handle_authorized} />
        </Route>


        <Route exact path="/info">
          <Header />
          <All_info uuid={uuid} authorized={authorized}/>
        </Route>

        <Route exact path="/about">
          <Header />
          <About />
        </Route>

      </Switch>

      <Footer />

    </Router>
  );



}

export default App;
