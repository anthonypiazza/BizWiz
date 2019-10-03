import React from 'react';

const BizListCard = (props) => {
    
    if(!props.biz) return <p>Loading...</p>
    
    return(
        <div style={{margin: '0px 6%', display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
            <div style={{height: '350px', display: 'flex', flexDirection: 'column', backgroundColor: '#423ABA', color: 'white', padding: '20px 10px', width: '300px', justifyContent: 'space-around'}}>
                <h2 style={{fontWeight: 'lighter', fontSize: '1.6rem', margin: '5px 0%'}}>{props.biz.name.toUpperCase()}</h2>
                <hr style={{width: '25%', padding: '0px'}}/>
                <button style={{ fontWeight: '600', boxShadow: '7px 10px 9px rgba(0, 0, 0, 0.25)', margin: '10px 10%', fontSize: '1.2rem', border: 'none', borderRadius: '5px', backgroundColor: 'white', color: '#423ABA', padding: '20px 10px'}}onClick={props.updateBizPush} >UPDATE BIZ</button>
                <button style={{ fontWeight: '600', boxShadow: '7px 10px 9px rgba(0, 0, 0, 0.25)', margin: '10px 10%', fontSize: '1.2rem', border: 'none', borderRadius: '5px', backgroundColor: 'white', color: '#423ABA', padding: '20px 10px'}} onClick={props.viewStats} >VIEW STATS</button>
                <button style={{ fontWeight: '600', boxShadow: '7px 10px 9px rgba(0, 0, 0, 0.25)', margin: '10px 10%', fontSize: '1.2rem', border: 'none', borderRadius: '5px', backgroundColor: 'white', color: '#423ABA', padding: '20px 10px'}} onClick={(e) => props.deleteBizEvent(props.biz.id, e)} >DELETE BIZ</button>
            </div>
            <div style={{zIndex: '-10', marginTop: '-15px', height: '30px', width: '120%', borderRadius: '50%', backgroundColor: '#C4C4C4'}}></div>
        </div>    
    )
}

export default BizListCard;