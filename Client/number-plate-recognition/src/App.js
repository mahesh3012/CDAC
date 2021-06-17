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


  const [authorized, set_authorized] = useState(false)
  function handle_authorized(newValue) {
    set_authorized(newValue);
  }

  return (

    <Router>

      <Switch>

        <Route exact path="/">
          <Login/>
        </Route>


        <Route exact path="/info">
          <Header/>
          <All_info/>
        </Route>

        <Route exact path="/about">
        <Header/>
          <About />
        </Route>

      </Switch>

      <Footer />

    </Router>
  );



}

export default App;
