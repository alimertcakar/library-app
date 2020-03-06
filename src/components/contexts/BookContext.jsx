import React, { createContext } from "react";

const BookContext = createContext(
    { bookCount: 3, 
    info: "this is info",
    book:[
        {id=0},
        {id=1, details:"kitap detayı"}
        {id=2, details:"başka bir kitap detayı"}
]

 }
    );

export default BookContext;
