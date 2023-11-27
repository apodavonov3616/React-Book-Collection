import React, { useEffect, useState } from 'react';
import Books from './Books'
import Search from './Search';
import Sort from './Sort'
import Pagination from './Pagination';

const Library = () => {

    
    const [books, setBooks] = useState([]);
    const [fullCollection, setFullCollection] = useState([]);
    const [search, setSearch] = useState({ searchBox: '' });
    const [currentPage, setCurrentPage] = useState(1)

    // retrieves book data from amazon aws
    useEffect(() => {
        const url = "/books";

        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const json = await response.json();
                setFullCollection(json.body)
                setBooks(json.body)

            } catch (error) {
                console.log("error", error);
            }
        };

        fetchData()
    }, []);

    // handles logic when the user clicks "search" 
    const handleSearchSubmit = (e) => {
        e.preventDefault();
        let filteredData = fullCollection.filter(book => {
            return book.title.toLowerCase().includes(search.searchBox.toLowerCase())
        })
        setBooks(filteredData)

        // resets sort option to default
        sortReset()
        // sets current rendered page to 1 regardless of previous page
        setCurrentPage(1)
    }

    // on each keyStroke of the searchbox, the search state is updated
    const handleSearchType = (e) => {
        setSearch({ searchBox: e.target.value })
    }

    // resets the sort option to default/unsorted
    const sortReset = () => {
        const sortSelector = document.querySelector('.sort-selector');
        sortSelector.value = 'Sort'
    }

    // sorts the current books based on user preference (Newest, Oldest, Alphabetical)
    const handleSort = (e) => {
        let sortedBooksCopy = [...books]
        sortedBooksCopy.sort((book1, book2) => {
            if (e.target.value === 'Newest') {
                return (book2.year - book1.year)
            } else if (e.target.value === 'Oldest') {
                return (book1.year - book2.year)
            } else if (e.target.value === 'Alphabetical') {
                return book1.title.toLowerCase().localeCompare(book2.title.toLowerCase());
            }
        })
        setBooks(sortedBooksCopy)
    }

    // pagniates books to 20 books per page
    const booksPerPage = 20;

    // retreives index of first and last book to be rendered, and sets currentBooks to be rendered based on the indices 
    const indexOfLastBook = currentPage * booksPerPage
    const indexOfFirstBook = indexOfLastBook - booksPerPage
    const currentBooks = books.slice(indexOfFirstBook, indexOfLastBook)

    // sets current page based on user preferences
    const paginate = pageNumber => setCurrentPage(pageNumber)

    return (
        <div>
            <Search handleSearchType={handleSearchType} handleSearchSubmit={handleSearchSubmit} />
            <Sort handleSort={handleSort} />
            <Books books={currentBooks} />
            <Pagination itemsPerPage={booksPerPage} totalItems={books.length} paginate={paginate} />
        </div>
    )
}

export default Library
