import React, {useEffect} from 'react';
import { connect } from 'react-redux';

import Yelp from '../assets/Yelp.png';
import {bizGetListing} from '../store/actions'

const BizStats = (props) => {

    const sliceIndex = window.location.href.lastIndexOf('/') + 1

    const bizID = parseInt(window.location.href.slice(sliceIndex))

    useEffect(() => {
        props.bizGetListing()
    },[])
    

    const bizName = props.bizArray.map(biz => {
        if(biz.id === bizID){
            return biz.name
        }
    })


    if(!props.bizArray) return <p>Loading...</p>
    return(
        <div style={{ display: 'flex', flexDirection: 'column', marginTop: '20px', marginBottom: '30px'}}>
            <h1 style={{ fontSize: '3.5rem', marginBottom: '0px'}}>{bizName}</h1>
            <hr style={{ width: '15%', marginBottom: '45px'}}/>
            <div style={{ display: 'flex', justifyContent: 'center'}}>
                <div style={{ margin: '0px 6%', display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
                    <div style={{ height: '350px', display: 'flex', flexDirection: 'column', backgroundColor: '#423ABA', color: 'white', padding: '20px 10px', width: '300px', justifyContent: 'flex-start'}}>
                        <h2 style={{ fontWeight: 'lighter', fontSize: '1.6rem', margin: '5px 0%'}}>SITES ANALYZED</h2>
                        <hr style={{ width: '25%', padding: '0px'}}/>
                        <img style={{ margin: '100px 30% 30px 30%'}} src={Yelp} alt="Yelp Logo"/>
                    </div>
                    <div style={{ zIndex: '-10', marginTop: '-15px', height: '30px', width: '120%', borderRadius: '50%', backgroundColor: '#C4C4C4'}}></div>
                </div>
                <div style={{ margin: '0px 6%', display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
                    <div style={{ height: '350px', display: 'flex', flexDirection: 'column', backgroundColor: '#423ABA', color: 'white', padding: '20px 10px', width: '300px', justifyContent: 'space-around'}}>
                        <h2 style={{ fontWeight: 'lighter', fontSize: '1.4rem', margin: '5px 0%'}}>TOP POSITIVE KEYWORDS</h2>
                        <hr style={{ width: '25%', padding: '0px'}}/>
                        {props.bizArray.map((biz, index) => {
                            if(biz.id === bizID){
                                return (
                                    <div key={index}style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                                        <h3 style={{ textAlign: 'left', fontWeight: 'lighter', fontSize: '1.2rem', color: 'white'}}>{biz.data.highratingterms[0]}</h3>
                                        <h3 style={{ textAlign: 'left', fontWeight: 'lighter', fontSize: '1.2rem', color: 'white'}}>{biz.data.highratingterms[1]}</h3>
                                        <h3 style={{ textAlign: 'left', fontWeight: 'lighter', fontSize: '1.2rem', color: 'white'}}>{biz.data.highratingterms[2]}</h3>
                                        <h3 style={{ textAlign: 'left', fontWeight: 'lighter', fontSize: '1.2rem', color: 'white'}}>{biz.data.highratingterms[3]}</h3>
                                        <h3 style={{ textAlign: 'left', fontWeight: 'lighter', fontSize: '1.2rem', color: 'white'}}>{biz.data.highratingterms[4]}</h3>
                                    </div>
                                )
                            }
                        })}
                    </div>
                    <div style={{ zIndex: '-10', marginTop: '-15px', height: '30px', width: '120%', borderRadius: '50%', backgroundColor: '#C4C4C4'}}></div>
                </div>
                <div style={{ margin: '0px 6%', display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
                    <div style={{ height: '350px', display: 'flex', flexDirection: 'column', backgroundColor: '#423ABA', color: 'white', padding: '20px 10px', width: '300px', justifyContent: 'space-around'}}>
                        <h2 style={{ fontWeight: 'lighter', fontSize: '1.4rem', margin: '5px 0%'}}>TOP NEGATIVE KEYWORDS</h2>
                        <hr style={{ width: '25%', padding: '0px'}}/>
                        {props.bizArray.map((biz, index) => {
                            if(biz.id === bizID){
                                return (
                                    <div key={index} style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                                        <h3 style={{ textAlign: 'left', fontWeight: 'lighter', fontSize: '1.2rem', color: 'white'}}>{biz.data.lowratingterms[0]}</h3>
                                        <h3 style={{ textAlign: 'left', fontWeight: 'lighter', fontSize: '1.2rem', color: 'white'}}>{biz.data.lowratingterms[1]}</h3>
                                        <h3 style={{ textAlign: 'left', fontWeight: 'lighter', fontSize: '1.2rem', color: 'white'}}>{biz.data.lowratingterms[2]}</h3>
                                        <h3 style={{ textAlign: 'left', fontWeight: 'lighter', fontSize: '1.2rem', color: 'white'}}>{biz.data.lowratingterms[3]}</h3>
                                        <h3 style={{ textAlign: 'left', fontWeight: 'lighter', fontSize: '1.2rem', color: 'white'}}>{biz.data.lowratingterms[4]}</h3>
                                    </div>
                                )
                            }
                        })}
                    </div>
                    <div style={{ zIndex: '-10', marginTop: '-15px', height: '30px', width: '120%', borderRadius: '50%', backgroundColor: '#C4C4C4' }}></div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        isGetting: state.bizGet.isGetting,
        bizArray: state.bizGet.entireBizArray,
        error: state.bizGet.error
    }
}

export default connect(mapStateToProps, {  bizGetListing  })(BizStats);