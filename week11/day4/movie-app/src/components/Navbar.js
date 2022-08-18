import React from 'react'
import Header from './navbar-components/Header'
import NavbarLinks from './navbar-components/NavbarLinks'
import Searchbar from './navbar-components/Searchbar'

const Navbar = ({ setMovieList }) => {
    return (
        <div>
            <Header />
            <Searchbar setMovieList={setMovieList} />
            <NavbarLinks />
        </div>
    )
}

export default Navbar
