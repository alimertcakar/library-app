import React, { useState } from 'react';
import '../style/components/Pagination.css';

function Pagination(props) {
    const [Pages, setPages] = useState(0);

    return (
        <div id="pagination">
            <a onClick={() => { alert("x") }}>Previous Page</a>
            &nbsp; Pages:{Pages} &nbsp;
            <a onClick={() => { alert("x") }}>Next Page</a>
        </ div>
    )
}

export default Pagination;