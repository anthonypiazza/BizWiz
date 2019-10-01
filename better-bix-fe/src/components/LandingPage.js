import React from 'react';

import Chef from '../assets/chef-reviews.png';
import Arrow from '../assets/arrow.png';
import Data from '../assets/analytics.png';
import Stars from '../assets/five-stars.png';

const LandingPage = () => {
    return(
        <div>
            <div style={{marginTop: '-100px', marginBottom: '50px'}}>
                <h1 style={{ fontSize: '3rem'}}>Biz Smarter, Not Harder.</h1>
                <hr style={{margin: '0px 35%'}}/>
            </div>
            <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '-110px'}}>
                <div>
                    <h2 style={{ fontSize: '2rem'}}>They Review.</h2>
                    <img src={Chef} alt="They Review"/>
                </div>
                <div>
                    <img style={{padding: '150px 10px 0px 10px'}} src={Arrow} alt="Arrow"/>
                </div>
                <div>
                    <h2 style={{ fontSize: '2rem'}}>We Analyze.</h2>
                    <img src={Data} alt="We Analyze"/>
                </div>
                <div>
                    <img style={{padding: '150px 10px 0px 10px'}} src={Arrow} alt="Arrow"/>
                </div>
                <div>
                    <h2 style={{ fontSize: '2rem'}}>You Improve.</h2>
                    <img src={Stars} alt="You Improve"/>
                </div>   
            </div>
            <button style={{margin: '0px 45% 0px 45%', cursor: 'pointer', border: '1px solid white', borderRadius: '5px', backgroundColor: 'white', color: '#423aba', padding: '20px', fontSize: '1.3rem', fontFamily: 'Sansation'}}>GET STARTED</button>
        </div>
    )
}

export default LandingPage;