import React, {useEffect} from 'react';
import { connect } from 'react-redux';

import {bizGetListing} from '../store/actions';
import {bizDeleteListing} from '../store/actions';
import BizListCard from './BizListCard';
import BizListAddCard from './BizListAddCard';

const BizList = (props) => {

    const updateBizPush = (bizID, e) => {
        e.preventDefault();
        props.history.push(`/bizupdate/${bizID}`)
    }

    const viewStats = (bizID, e) => {
        e.preventDefault();
        props.history.push(`/bizstats/${bizID}`)
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
            <div style={{display: 'flex', justifyContent: 'center', flexWrap: 'wrap'}}>
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
                <BizListAddCard addBizEvent={addBizEvent} />
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