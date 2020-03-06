import React from 'react';
import BookDisplay from './BookDisplay';
import BookContext from './contexts/BookContext';

function BookList(props) {
    return (
        <BookContext.Provider value={props}>
            <BookDisplay />
        </BookContext.Provider>
    )
}
export default BookList;