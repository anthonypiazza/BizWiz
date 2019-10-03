import React, {useEffect} from 'react';
import { connect } from 'react-redux';

import Yelp from '../assets/Yelp.png';
import {bizGetListing} from '../store/actions'

const BizStats = (props) => {

    useEffect(() => {
        props.bizGetListing()
    }, [])

    return(
        <div style={{ display: 'flex', flexDirection: 'column', marginTop: '20px', marginBottom: '30px'}}>
            <h1 style={{ fontSize: '3.5rem', marginBottom: '0px'}}>PERRY'S STEAKHOUSE</h1>
            <hr style={{ width: '15%', marginBottom: '45px'}}/>
            <div style={{ display: 'flex', justifyContent: 'center'}}>
                <div style={{ margin: '0px 6%', display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
                    <div style={{ height: '350px', display: 'flex', flexDirection: 'column', backgroundColor: '#423ABA', color: 'white', padding: '20px 10px', width: '300px', justifyContent: 'flex-start'}}>
                        <h2 style={{ fontWeight: 'lighter', fontSize: '1.6rem', margin: '5px 0%'}}>SITES ANALYZED</h2>
                        <hr style={{ width: '25%', padding: '0px'}}/>
                        <img style={{ margin: '30px 30%'}} src={Yelp} alt="Yelp Logo"/>
                    </div>
                    <div style={{ zIndex: '-10', marginTop: '-15px', height: '30px', width: '120%', borderRadius: '50%', backgroundColor: '#C4C4C4'}}></div>
                </div>
                <div style={{ margin: '0px 6%', display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
                    <div style={{ height: '350px', display: 'flex', flexDirection: 'column', backgroundColor: '#423ABA', color: 'white', padding: '20px 10px', width: '300px', justifyContent: 'space-around'}}>
                        <h2 style={{ fontWeight: 'lighter', fontSize: '1.4rem', margin: '5px 0%'}}>TOP POSITIVE KEYWORDS</h2>
                        <hr style={{ width: '25%', padding: '0px'}}/>
                        <h3 style={{ fontWeight: 'lighter', fontSize: '1.2rem', color: 'white'}}>KEYWORD</h3>
                        <h3 style={{ fontWeight: 'lighter', fontSize: '1.2rem', color: 'white'}}>KEYWORD</h3>
                        <h3 style={{ fontWeight: 'lighter', fontSize: '1.2rem', color: 'white'}}>KEYWORD</h3>
                        <h3 style={{ fontWeight: 'lighter', fontSize: '1.2rem', color: 'white'}}>KEYWORD</h3>
                        <h3 style={{ fontWeight: 'lighter', fontSize: '1.2rem', color: 'white'}}>KEYWORD</h3>
                    </div>
                    <div style={{ zIndex: '-10', marginTop: '-15px', height: '30px', width: '120%', borderRadius: '50%', backgroundColor: '#C4C4C4'}}></div>
                </div>
                <div style={{ margin: '0px 6%', display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
                    <div style={{ height: '350px', display: 'flex', flexDirection: 'column', backgroundColor: '#423ABA', color: 'white', padding: '20px 10px', width: '300px', justifyContent: 'space-around'}}>
                        <h2 style={{ fontWeight: 'lighter', fontSize: '1.4rem', margin: '5px 0%'}}>TOP NEGATIVE KEYWORDS</h2>
                        <hr style={{ width: '25%', padding: '0px'}}/>
                        <h3 style={{ fontWeight: 'lighter', fontSize: '1.2rem', color: 'white'}}>KEYWORD</h3>
                        <h3 style={{ fontWeight: 'lighter', fontSize: '1.2rem', color: 'white'}}>KEYWORD</h3>
                        <h3 style={{ fontWeight: 'lighter', fontSize: '1.2rem', color: 'white'}}>KEYWORD</h3>
                        <h3 style={{ fontWeight: 'lighter', fontSize: '1.2rem', color: 'white'}}>KEYWORD</h3>
                        <h3 style={{ fontWeight: 'lighter', fontSize: '1.2rem', color: 'white'}}>KEYWORD</h3>
                    </div>
                    <div style={{ zIndex: '-10', marginTop: '-15px', height: '30px', width: '120%', borderRadius: '50%', backgroundColor: '#C4C4C4' }}></div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        bizArray: state.bizGet.entireBizArray,
        isGetting: state.bizGet.isGetting,
        error: state.bizGet.error
    }
}

export default connect(mapStateToProps, {  bizGetListing  })(BizStats);