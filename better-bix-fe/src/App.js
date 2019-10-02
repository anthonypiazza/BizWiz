import React, {useState, useEffect} from 'react';
import {Route, NavLink} from 'react-router-dom'

import './App.css';
import Logo from './assets/logo-nav.png';
import Register from './components/Register';
import Login from './components/Login';
import Footer from './components/Footer';
import LandingPage from './components/LandingPage';
import BizList from './components/BizList';
import Stats from './components/Stats';

const App = () => {

  const [loggedIn, setLoggedIn] = useState(false)

  useEffect(() => {
    const token = localStorage.getItem('token')
    if(!token){
      setLoggedIn(false)
    }else{
      setLoggedIn(true)
    }
  }, [loggedIn])

  const logout = (e) => {
    e.preventDefault();
    localStorage.clear();
  }

  return (
    <div className="App">
      <nav style={{backgroundColor: '#423aba', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0px 2%'}}>
          <img style={{height: '60%', cursor: 'pointer'}} src={Logo} alt="Logo and Home Button"/>
          {loggedIn ? (
            <div style={{paddingRight: '100px'}}>
              <NavLink style={{color: 'white', textDecoration: 'none', paddingRight: '100px'}} to="/dashboard">DASHBOARD</NavLink>
              <NavLink onClick={logout} style={{color: 'white', textDecoration: 'none'}} to="/">LOGOUT</NavLink>
            </div>
          ) : (
            <div style={{paddingRight: '100px'}}>
              <NavLink style={{color: 'white', textDecoration: 'none', paddingRight: '100px'}} to="/register">REGISTER</NavLink>
              <NavLink style={{color: 'white', textDecoration: 'none'}} to="/login">SIGN IN</NavLink>
            </div>
          )}
      </nav>
      <Route exact path="/" render={(props) => <LandingPage {...props} />} />
      <Route path="/register" render={(props) => <Register {...props} />} />
      <Route path="/login" render={(props) => <Login {...props} />} />
      <Route path="/dashboard" component={BizList} />
      <Route path="/bizstats" component={Stats} />
      <Footer />
    </div>
  );
}

export default App;
