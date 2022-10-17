import React from 'react'

const Header = () => {

    const refreshPage = () => {
        window.location.reload();
    }

    return (
        <div className="header">
            <i className="fa-solid fa-book fa-2xl" ></i>
            <h2 onClick={refreshPage} className="header-text">SPIG Book Collection</h2>
        </div>
    )
}

export default Header
