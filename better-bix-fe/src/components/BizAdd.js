import React, {useState} from 'react';
import { connect } from 'react-redux';

import { bizAddListing } from '../store/actions';

const BizAdd = (props) => {

    const [businessBody, setBusinessBody] = useState({
        name: '',
        yelp_url: ''
    })

    const changeHandler = (e) => {
        setBusinessBody({...businessBody, [e.target.name]: e.target.value })
    }
    const submitNewBiz = (e) => {
        e.preventDefault();
        props.bizAddListing(businessBody, props.history)
    }
    console.log(businessBody)
    return(
        <div style={{display: 'flex', flexDirection: 'column', marginTop: '50px', alignItems: 'center'}}>
            <h1 style={{ fontSize: '3.5rem', marginBottom: '0px'}}>ADD A NEW BIZ LISTING</h1>
            <hr style={{ width: '15%', marginBottom: '45px'}}/>
            <div style={{width: '40%', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <form style={{padding: '20px 10px', width: '70%', color: 'white', display: 'flex', flexDirection: 'column', backgroundColor: '#423ABA'}}>
                    <div style={{display: 'flex', flexDirection: 'column', padding: '15px'}}>
                        <label style={{textAlign: 'left', paddingBottom: '2px'}}>BUSINESS NAME:</label>
                        <input style={{fontFamily: 'Sansation', padding: '7px 1%'}} onChange={changeHandler} name='name'/>
                    </div>
                    <div style={{display: 'flex', flexDirection: 'column', padding: '15px'}}>
                        <label style={{textAlign: 'left', paddingBottom: '2px'}}>YELP URL:</label>
                        <input style={{fontFamily: 'Sansation', padding: '7px 1%'}} onChange={changeHandler} name='yelp_url'/>
                    </div>
                    <button style={{boxShadow: '10px 10px 7px rgba(0, 0, 0, 0.25)', fontFamily: 'Sansation', fontSize: '1.3rem', margin: '15px', border: 'none', backgroundColor: 'white', padding: '9px 0%', color: '#423ABA'}} onClick={submitNewBiz}>ADD BIZ</button>
                </form>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
    }
}

export default connect(mapStateToProps, { bizAddListing })(BizAdd);