import React, { useState } from 'react';
import { connect } from 'react-redux';
import { registerUser } from '../store/actions'

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
        props.registerUser(registerBody);
    }

    console.log(registerBody)
    return(
        <div>
            <form>
                <label>
                    Username:
                    <input onChange={changeHandler} name='username'/>
                </label>
                <label>
                    Password:
                    <input onChange={changeHandler} name='password'/>
                </label>
                <label>
                    Email:
                    <input onChange={changeHandler} name='email'/>
                </label>
            </form>
            <button onClick={submitUser}>Register</button>
        </div>
    )
}

export default connect(null, { registerUser })(Register);