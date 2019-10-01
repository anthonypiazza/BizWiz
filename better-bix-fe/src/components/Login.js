import React, { useState } from 'react';
import { connect } from 'react-redux';
import { loginUser } from '../store/actions'

const Login = (props) => {

    const [loginBody, setLoginBody] = useState({
        username: '',
        password: ''
    })

    const changeHandler = (e) => {
        setLoginBody({...loginBody, [e.target.name]: e.target.value })
    }

    const submitUser = (e) => {
        e.preventDefault();
        props.loginUser(loginBody);
    }

    console.log(loginBody)
    return(
        <div>
            <form>
                <input onChange={changeHandler} name='username'/>
                <input onChange={changeHandler} name='password'/>
            </form>
            <button onClick={submitUser}>Login</button>
        </div>
    )
}

export default connect(null, { loginUser })(Login);