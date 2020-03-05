import React from 'react';
import '../style/components/Search.css';



export default function Search() {
    return (
        <div id="searchContainer">
            <input type="text" id="Search"></input>
            <input type="submit" value="SEARCH"></input>
        </div>
    );
}