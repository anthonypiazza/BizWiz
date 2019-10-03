import React from 'react';
import {Route, NavLink, Redirect} from 'react-router-dom';
import { connect } from 'react-redux';

import './App.css';
import Logo from './assets/logo-nav.png';
import Register from './components/Register';
import Login from './components/Login';
import Footer from './components/Footer';
import LandingPage from './components/LandingPage';
import BizList from './components/BizList';
import Stats from './components/BizStats';
import BizAdd from './components/BizAdd';
import BizUpdate from './components/BizUpdate';
import { logout } from './store/actions';

const App = (props) => {

  const logout = (e) => {
    e.preventDefault();
    props.logout();
  }

  console.log(props.isLoggedIn)

  return (
    <div className="App">
      <nav style={{backgroundColor: '#423aba', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0px 2%'}}>
          <NavLink to='/'><img style={{height: '60px', cursor: 'pointer'}} src={Logo} alt="Logo and Home Button"/></NavLink>
          {props.isLoggedIn ? (
            <div style={{paddingRight: '100px'}}>
              <NavLink style={{color: 'white', textDecoration: 'none', paddingRight: '100px'}} to="/dashboard">DASHBOARD</NavLink>
              <NavLink onClick={logout} style={{color: 'white', textDecoration: 'none'}} exact to="/">LOGOUT</NavLink>
            </div>
          ) : (
            <div style={{paddingRight: '100px'}}>
              <NavLink style={{color: 'white', textDecoration: 'none', paddingRight: '100px'}} to="/register">REGISTER</NavLink>
              <NavLink style={{color: 'white', textDecoration: 'none'}} to="/login">SIGN IN</NavLink>
            </div>
          )}
      </nav>
      {props.isLoggedIn ? null : (
        <Redirect to="/" component={LandingPage} />
      )}
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/dashboard" component={BizList} />
      <Route exact path="/bizstats" component={Stats} />
      <Route exact path="/bizadd" component={BizAdd} />
      <Route exact path="/bizupdate" component={BizUpdate} />
      <Footer />
    </div>
  );
}

const mapStateToProps = (state) => {
  return{
    isLoggedIn: state.login.isLoggedIn
  }
}

export default connect(mapStateToProps, { logout })(App);
