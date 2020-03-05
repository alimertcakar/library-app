import React, { useState } from 'react';

function Pagination(props) {
    const [Pages, setPages] = useState(0);

    return (
        <div className="Pagination">
            <a onClick={() => { alert("x") }}>Previous Page</a>
            &nbsp; Pages:{Pages} &nbsp;
            <a onClick={() => { alert("x") }}>Next Page</a>
        </ div>
    )
}

export default Pagination;