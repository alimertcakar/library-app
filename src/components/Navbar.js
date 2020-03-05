import React, { useState } from 'react';
import '../style/components/Navbar.css';

function Navbar(props) {
    return (
        <a href="#">
            <div id="Navbar">
                <h1>{props.title}</h1>
            </div>
        </a>
    )
}

export default Navbar;