import React from 'react';


const BizListAddCard = (props) => {

    return(
        <div style={{margin: '20px 6%', display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
            <div style={{height: '350px', display: 'flex', flexDirection: 'column', backgroundColor: '#423ABA', color: 'white', padding: '20px 10px', width: '300px', justifyContent: 'space-around'}}>
                <button onClick={props.addBizEvent} style={{width: '100%', height: '100%', color: 'white', border: 'none', backgroundColor: 'transparent', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                    <h2 style={{fontSize: '1.6rem', margin: '10px', fontFamily: 'Sansation'}}>ADD NEW BIZ</h2>
                    <h2 style={{fontSize: '1.6rem', margin: '0px'}}>+</h2>
                </button>
            </div>
            <div style={{zIndex: '-10', marginTop: '-15px', height: '30px', width: '120%', borderRadius: '50%', backgroundColor: '#C4C4C4'}}></div>
        </div>
    )
}

export default BizListAddCard;