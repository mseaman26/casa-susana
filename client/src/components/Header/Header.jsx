import React from 'react'
import { Link } from 'react-router-dom';
import './Header.css'

function Header() {
    return(
        <>
        <nav>
            <Link to={'/'}>Home</Link>
            <Link to={'/menu'}>Menu</Link>
            <Link to={'/order'}>Order Online</Link>
            <Link to={'/contact'}>Contact</Link>
        </nav>  
        </>
    )
}

export default Header