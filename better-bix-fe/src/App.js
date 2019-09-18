import React from 'react';
import {Route, NavLink} from 'react-router-dom'

import './App.css';
import Logo from './assets/logo-nav.png';
import Chef from './assets/chef-reviews.png';
import Arrow from './assets/arrow.png';
import Data from './assets/analytics.png';
import Stars from './assets/five-stars.png'
import Register from './components/Register';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <nav style={{backgroundColor: '#423aba', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0px 2%'}}>
          <img src={Logo} alt="Logo and Home Button"/>
          <div style={{paddingRight: '100px'}}>
            <NavLink style={{color: 'white', textDecoration: 'none', paddingRight: '100px'}} to="/register">REGISTER</NavLink>
            <NavLink style={{color: 'white', textDecoration: 'none'}} to="/login">SIGN IN</NavLink>
            <Route path="/register" render={(props) => <Register {...props} />} />
            <Route path="/login" render={(props) => <Login {...props} />} />
          </div>
      </nav>
      <div>
        <h1 style={{ fontSize: '3rem'}}>Biz Smarter, Not Harder.</h1>
        <hr style={{margin: '0px 35%'}}/>
      </div>
      <div style={{display: 'flex',   justifyContent: 'space-between'}}>
        <div>
          <h2>They Review.</h2>
          <img src={Chef} alt="They Review"/>
        </div>
        <div>
          <img style={{padding: '150px 20px 0px 20px'}} src={Arrow} alt="Arrow"/>
        </div>
        <div>
          <h2>We Analyze.</h2>
          <img src={Data} alt="We Analyze"/>
        </div>
        <div>
          <img style={{padding: '150px 20px 0px 20px'}} src={Arrow} alt="Arrow"/>
        </div>
        <div>
          <h2>You Improve.</h2>
          <img src={Stars} alt="You Improve"/>
        </div>   
      </div>     
      <button style={{margin: '-150px 45% 150px 45%', border: '1px solid white', borderRadius: '5px', backgroundColor: 'white', color: '#423aba', padding: '20px', fontSize: '1.3rem', fontFamily: 'Sansation'}}>GET STARTED</button>
      <footer style={{marginTop: '0px', color: 'white', display: 'flex', justifyContent: 'space-between', backgroundColor: '#423aba', padding: '0px 2%'}}>
        <div>
          <h3>ALL RIGHTS RESERVED</h3>
        </div>
        <div style={{display:'flex'}}>
          <h3 style={{paddingRight: '100px'}}>DISCLAIMERS</h3>
          <h3>TERMS & CONDITIONS</h3>
        </div>
      </footer>
    </div>
  );
}

export default App;
