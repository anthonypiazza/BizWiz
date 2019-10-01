import React from 'react';

const Footer = () => {
    return(
        <footer style={{marginTop: '0px', color: 'white', display: 'flex', justifyContent: 'space-between', backgroundColor: '#423aba', padding: '0px 2%'}}>
            <div>
                <h5 style={{cursor: 'pointer'}}>ALL RIGHTS RESERVED</h5>
            </div>
            <div style={{display:'flex'}}>
                <h5 style={{marginRight: '100px', cursor: 'pointer'}}>DISCLAIMERS</h5>
                <h5 style={{cursor: 'pointer'}}>TERMS & CONDITIONS</h5>
            </div>
        </footer>
    )
}

export default Footer;