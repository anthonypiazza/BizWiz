import React, { useEffect } from 'react';
import { connect } from 'react-redux';

const BizList = (props) => {

    const updateBizPush = (e) => {
        e.preventDefault();
        props.history.push('/bizupdate')
    }

    const viewStats = (e) => {
        e.preventDefault();
        props.history.push('/bizstats')
    }

    const deleteBizEvent = (e) => {
        e.preventDefault();
        //props.deleteBiz(biz)
        props.history.push('/bizupdate')
    }

    return(
        <div style={{display: 'flex'}}>
            <div style={{display: 'flex', flexDirection: 'column'}}>
                <h2>Perry's Steakhouse</h2>
                <hr/>
                <button>UPDATE BIZ</button>
                <button>VIEW STATS</button>
                <button>DELETE BIZ</button>
            </div>
            <div>

            </div>
        </div>
    )
}

export default connect(null, { })(BizList);