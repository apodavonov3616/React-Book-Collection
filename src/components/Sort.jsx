import React from 'react';

const Sort = ({ handleSort }) => {

    return (
        <div className="sorting-container">
            <select className="sort-selector" defaultValue='Sort' onChange={handleSort}>
                <option disabled value="Sort">Sort</option>
                <option value="Newest">Newest</option>
                <option value="Oldest">Oldest</option>
                <option value="Alphabetical">Alphabetical</option>
            </select>
        </div>
    )
}

export default Sort
