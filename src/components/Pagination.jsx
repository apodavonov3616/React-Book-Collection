import React from 'react'

const Pagination = ({ itemsPerPage, totalItems, paginate }) => {


    // calculates the number of page options to show to the user based on total items and items per page
    const pageNumbers = []
    for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
        pageNumbers.push(i)
    }

    return (
        <div className="pagination">
            {pageNumbers.map(number => (
                <a key={number} onClick={() => paginate(number)} href="#" className="page-link">
                    {number}
                </a>
            ))}
        </div>
    )
}

export default Pagination