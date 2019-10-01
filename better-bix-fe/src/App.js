import React from 'react';
import {Route, NavLink} from 'react-router-dom'

import './App.css';
import Logo from './assets/logo-nav.png';
import Register from './components/Register';
import Login from './components/Login';
import Footer from './components/Footer';
import LandingPage from './components/LandingPage';

const App = () => {
  return (
    <div className="App">
      <nav style={{backgroundColor: '#423aba', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0px 2%'}}>
          <img style={{height: '60%', cursor: 'pointer'}} src={Logo} alt="Logo and Home Button"/>
          <div style={{paddingRight: '100px'}}>
            <NavLink style={{color: 'white', textDecoration: 'none', paddingRight: '100px'}} to="/register">REGISTER</NavLink>
            <NavLink style={{color: 'white', textDecoration: 'none'}} to="/login">SIGN IN</NavLink>
          </div>
      </nav>
      <Route path="/" render={(props) => <LandingPage {...props} />} />
      <Route exact path="/register" render={(props) => <Register {...props} />} />
      <Route path="/login" render={(props) => <Login {...props} />} />
      <Footer />
    </div>
  );
}

export default App;
