import React from 'react'
import { Link } from 'react-router-dom'

const NavbarLinks = () => {
    return (
        <div className='links'>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
        </div>
    )
}

export default NavbarLinks
