import React from 'react'

const Search = ({ handleSearchSubmit, handleSearchType }) => {
    return (
        <div className="search-container">
            <form onSubmit={handleSearchSubmit} action="">
                <input onChange={handleSearchType} type="text" />
                <button type="submit">Search</button>
            </form>
        </div>
    )
}

export default Search
