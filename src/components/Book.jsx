import React from 'react';

const Book = (props) => {

    // google searches for the book based on title
    const searchForBook = (e) => {
        window.open("//" + "google.com/search?q=" + e.target.innerHTML, '_blank');
    }


    const { book } = props
    return (
        <tr>
            <td onClick={searchForBook} className="title-link">{book.title}</td>
            <td>{book.author}</td>
            <td>{book.year}</td>
            <td>{book.isbn}</td>
        </tr>
    )
}

export default Book
