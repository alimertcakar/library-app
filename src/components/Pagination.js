import React, { useState } from 'react';

function Pagination(props) {
    const [Pages, setPages] = useState(0);

    return (
        <div className="Pagination">
            Pages={Pages}
            <a onClick={alert("x")}>Previous Page</a>
        </ div>
    )
}

export default Pagination;