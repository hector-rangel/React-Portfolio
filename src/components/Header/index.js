import React from 'react';
import Nav from '../Nav';

function Header({currentPage, handlePageChange}) {
    return (
        <header>
            <h1>Hector Rangel</h1>
            <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
        </header>
    )
}

export default Header;