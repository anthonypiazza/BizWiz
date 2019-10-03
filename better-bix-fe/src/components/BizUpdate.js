import React, {useState} from 'react';
import { connect } from 'react-redux';

import { bizUpdateListing } from '../store/actions';

const BizUpdate = (props) => {

    const [businessBody, setBusinessBody] = useState({
        yelp_url: ''
    })

    const changeHandler = (e) => {
        setBusinessBody({...businessBody, [e.target.name]: e.target.value })
    }
    const updateThisBiz = (e) => {
        e.preventDefault();
        props.bizUpdateListing(businessBody, props.history)
    }

    return(
        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-around', alignItems: 'center'}}>
            <h1 style={{ fontSize: '3.5rem', marginBottom: '0px'}}>UPDATE BIZ LISTING</h1>
            <hr style={{ width: '15%', marginBottom: '45px'}}/>
            <div style={{width: '40%', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <form style={{padding: '20px 10px', width: '70%', color: 'white', display: 'flex', flexDirection: 'column', backgroundColor: '#423ABA'}}>
                    <div style={{display: 'flex', flexDirection: 'column', padding: '15px'}}>
                        <label style={{textAlign: 'left', paddingBottom: '2px'}}>YELP URL:</label>
                        <input style={{fontFamily: 'Sansation', padding: '7px 1%'}} onChange={changeHandler} name='yelp_url'/>
                    </div>
                    <button style={{fontFamily: 'Sansation', fontSize: '1.3rem', margin: '15px', border: 'none', backgroundColor: 'white', padding: '9px 0%', color: '#423ABA'}} onClick={updateThisBiz}>UPDATE BIZ</button>
                </form>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
    }
}

export default connect(mapStateToProps, { bizUpdateListing })(BizUpdate);