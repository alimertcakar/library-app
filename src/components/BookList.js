import React, { useContext } from 'react';
import BookDisplay from './BookDisplay';
import BookContext from './contexts/BookContext';

function BookList(props) {
    const Books = useContext(BookContext);
    console.log(Books);
    return (
        <BookContext.Provider>
            <BookDisplay booksJson={Books} />
            <BookDisplay booksJson={Books} />

        </BookContext.Provider>
    )
}
export default BookList;