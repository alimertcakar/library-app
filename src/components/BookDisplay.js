import React, { useState } from 'react';
import '../style/components/BookDisplay.css';

function BookDisplay(props) {
    return (
        <div id="BookDisplay">
            Book Here + {props.Values}
        </div>
    )
}

export default BookDisplay;