import React, { useState } from 'react';
import { connect } from 'react-redux';

import { registerUser } from '../store/actions';
import Cupcake from '../assets/Cupcake.png';
import Burger from '../assets/Burger.png';
import IceCream from '../assets/IceCream.png';

const Register = (props) => {

    const [registerBody, setRegisterBody] = useState({
        username: '',
        password: '',
        email: ''
    })

    const changeHandler = (e) => {
        setRegisterBody({...registerBody, [e.target.name]: e.target.value })
    }

    const submitUser = (e) => {
        e.preventDefault();
        props.registerUser(registerBody, props.history);
    }

    console.log(registerBody)
    return(
        <div style={{display: 'flex', justifyContent: 'space-around', alignItems: 'flex-end'}}>
            <div style={{width: '20%', display: 'flex', alignItems: 'center'}}>
                <img style={{height: '220px', width: 'auto'}} src={Burger} alt="Burger" />
            </div>
            <div style={{width: '40%', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <img style={{zIndex: '50', textStroke: '1px white', marginBottom: '-50px', height:'220px', width: 'auto'}} src={IceCream} alt="Ice Cream" />
                <form style={{padding: '20px 10px', width: '70%', color: 'white', display: 'flex', flexDirection: 'column', backgroundColor: '#423ABA'}}>
                    <div style={{display: 'flex', flexDirection: 'column', padding: '15px'}}>
                        <label style={{textAlign: 'left', paddingBottom: '2px'}}>EMAIL:</label>
                        <input style={{fontFamily: 'Sansation', padding: '7px 1%'}} onChange={changeHandler} name='email'/>
                    </div>
                    <div style={{display: 'flex', flexDirection: 'column', padding: '15px'}}>
                        <label style={{textAlign: 'left', paddingBottom: '2px'}}>USERNAME:</label>
                        <input style={{fontFamily: 'Sansation', padding: '7px 1%'}} onChange={changeHandler} name='username'/>
                    </div>
                    <div style={{display: 'flex', flexDirection: 'column', padding: '15px'}}>
                        <label style={{textAlign: 'left', paddingBottom: '2px'}}>PASSWORD:</label>
                        <input style={{fontFamily: 'Sansation', padding: '7px 1%'}} type='password' onChange={changeHandler} name='password'/>
                    </div>
                    <button style={{fontFamily: 'Sansation', fontSize: '1.3rem', margin: '15px', border: 'none', backgroundColor: 'white', padding: '9px 0%', color: '#423ABA'}} onClick={submitUser}>REGISTER</button>
                </form>
            </div>
            <div style={{width: '20%', display: 'flex', alignItems: 'center'}}>
                <img style={{height: '300px', width: 'auto'}} src={Cupcake} alt="Cupcake" />
            </div>
        </div>
    )
}

export default connect(null, { registerUser })(Register);