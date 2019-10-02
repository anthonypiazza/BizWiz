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
            <form style={{display: 'flex', flexDirection: 'column'}}>
                <label>
                    Username:
                    <input onChange={changeHandler} name='username'/>
                </label>
                <label>
                    Password:
                    <input onChange={changeHandler} name='password'/>
                </label>
            </form>
            <button onClick={submitUser}>Login</button>
        </div>
    )
}

export default connect(null, { loginUser })(Login);