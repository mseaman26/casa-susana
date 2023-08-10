import React from 'react'
import { NavLink } from 'react-router-dom';
import './Header.css'

function Header() {
    return(
        <>
        <nav className='fixed_top'>
            <NavLink to="/" activeclassname="active">Home</NavLink>
            <NavLink to="/menu" activeclassname="active">Menu</NavLink>
            <NavLink to="/order" activeclassname="active">Order Online</NavLink>
            <NavLink to="/contact" activeclassname="active">Contact</NavLink>
        </nav>  
        </>
    )
}

export default Header