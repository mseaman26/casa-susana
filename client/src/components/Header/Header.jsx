import React from 'react'
import { NavLink } from 'react-router-dom';
import './Header.css'

function Header() {
    return(
        <>
        <nav className='fixed_top'>
            <NavLink exact to="/" activeClassName="active">Home</NavLink>
            <NavLink to="/menu" activeClassName="active">Menu</NavLink>
            <NavLink to="/order" activeClassName="active">Order Online</NavLink>
            <NavLink to="/contact" activeClassName="active">Contact</NavLink>
        </nav>  
        </>
    )
}

export default Header