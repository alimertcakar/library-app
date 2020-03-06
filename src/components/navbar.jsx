import React, { useState } from 'react';
import '../style/components/Navbar.css';

function Navbar(props) {
    return (

        <div id="Navbar">
            <a href="#" id="Navbar--link">
                <h1>{props.title}</h1>
            </a>
        </div >

    )
}

export default Navbar;