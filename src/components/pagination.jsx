import React, { useState, createContext, useContext } from 'react';
import '../style/components/Pagination.css';
import BookContext from './contexts/bookContext';


function Pagination(props) {
    const {page,changePage} = useContext(BookContext);

    return (
        <div id="pagination">
            <a onClick={() => { changePage(page -1) }}>Previous Page</a>
            &nbsp; Pages:{page} &nbsp;
            <a onClick={() => {changePage(page +1) }}>Next Page</a>
        </ div>
            
    )
}

export default Pagination;