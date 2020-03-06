import React, { useContext } from 'react';
import BookDisplay from './BookDisplay';
import BookContext from './contexts/BookContext';

function BookList(props) {
    const Books = useContext(BookContext);
    return (
        <BookContext.Provider>
            {
                Array(Books.bookCount).fill(<BookDisplay booksJson={Books.info} />)
            }
        </BookContext.Provider>
    )
}
export default BookList;