import React from 'react';
import Book from './Book'

const Books = ({ books }) => {

    return (
        <div className="Books">
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Publication</th>
                        <th>ISBN</th>
                    </tr>
                </thead>
                <tbody>
                    {books.map((book, index) => (
                        <Book book={book} key={index} />
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Books
