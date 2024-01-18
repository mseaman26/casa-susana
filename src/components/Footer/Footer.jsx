import React from "react";
import './Footer.css'
import { NavLink } from "react-router-dom";

const Footer = () => {
    return (
        <nav id="footer">
            <div id="footer_nav_container">
                <NavLink className='footer_nav_link' to='/orderlocations' activeclassname="active">ORDER ONLINE</NavLink>
                <NavLink className='footer_nav_link' to='/menu/location1' activeclassname="active">PARKER, CO MENU</NavLink>
                <NavLink className='footer_nav_link' to='/menu/location2' activeclassname="active">KENTFIELD, CA MENU</NavLink>
                <NavLink className='footer_nav_link' to='/ourstory' activeclassname="active">OUR STORY</NavLink>
                <NavLink className='footer_nav_link' to='/orderlocations' activeclassname="active">LOCATIONS</NavLink>
            </div>
            <p id="copyright">&copy; Casa Susana</p>
        </nav>
    )
    
}

export default Footer