import React, { useEffect, useState } from 'react';
import './App.css';
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { All_info } from './components/All_info'
import { Login } from './components/Login'
import { About } from './components/About'
import {ForgotPassword} from './components/ForgotPassword'
import {ChangePassword} from './components/ChangePassword'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {

  return (

    <Router>

      <Switch>

        <Route exact path="/">
          <Header/>
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

        <Route exact path="/forgot_password">
          <Header/>
          <ForgotPassword/>
        </Route>

        <Route exact path="/change_password">
          <Header/>
          <ChangePassword/>
        </Route>

      </Switch>

      <Footer />

    </Router>
  );



}

export default App;
