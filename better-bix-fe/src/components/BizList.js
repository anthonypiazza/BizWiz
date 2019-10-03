import React, {useEffect, useState} from 'react';
import { connect } from 'react-redux';

import {bizGetListing} from '../store/actions'
import {bizDeleteListing} from '../store/actions'
import BizListCard from './BizListCard';

const BizList = (props) => {

    const updateBizPush = (e) => {
        e.preventDefault();
        props.history.push('/bizupdate')
    }

    const viewStats = (e) => {
        e.preventDefault();
        props.history.push('/bizstats')
    }

    const deleteBizEvent = (bizID, e) => {
        e.preventDefault()
        props.bizDeleteListing(bizID)
        props.bizGetListing()
    }

    const addBizEvent = (e) => {
        e.preventDefault();
        props.history.push('/bizadd')
    }

    const [selectedBiz, setSelectedBiz] = useState()

    const {bizGetListing, bizArray} = props
    
    useEffect(() => {
        bizGetListing()
    }, [])

    console.log('BIZ LIST', bizArray)

    if(!props.bizArray) return <p>Loading...</p>
    return(
        <div style={{display: 'flex', flexDirection: 'column', marginTop: '50px'}}>
            <h1 style={{fontSize: '2.5rem', marginBottom: '0px'}}>YOUR BIZ LISTINGS</h1>
            <hr style={{width: '15%', marginBottom: '45px'}}/>
            <div style={{display: 'flex', justifyContent: 'center'}}>
                {props.bizArray.length === 0 ? null : (
                    props.bizArray.map((biz, index) => (
                        <BizListCard 
                            key={index}
                            biz={biz}
                            deleteBizEvent={deleteBizEvent}
                            viewStats={viewStats}
                            updateBizPush={updateBizPush}
                        />
                    ))
                )}
                <div style={{margin: '0px 6%', display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
                    <div style={{height: '350px', display: 'flex', flexDirection: 'column', backgroundColor: '#423ABA', color: 'white', padding: '20px 10px', width: '300px', justifyContent: 'space-around'}}>
                        <button onClick={addBizEvent} style={{width: '100%', height: '100%', color: 'white', border: 'none', backgroundColor: 'transparent', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                            <h2 style={{fontSize: '1.6rem', margin: '10px', fontFamily: 'Sansation'}}>ADD NEW BIZ</h2>
                            <h2 style={{fontSize: '1.6rem', margin: '0px'}}>+</h2>
                        </button>
                    </div>
                    <div style={{zIndex: '-10', marginTop: '-15px', height: '30px', width: '120%', borderRadius: '50%', backgroundColor: '#C4C4C4'}}></div>
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

export default connect(mapStateToProps, { bizDeleteListing, bizGetListing })(BizList);