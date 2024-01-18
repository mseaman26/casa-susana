import React from "react";
import './NavMenuDropBox.css'
import { Link } from "react-router-dom";

const NavMenuDropBox = ({setIsNavMenuOpen}) => {
    return (
        <>
        <div id="nav_menu_drop_box_container">
            <Link to='/menu/location1' onClick={() => setIsNavMenuOpen(false)}>Parker, CO Menu</Link>
            <Link to='/menu/location2' onClick={() => setIsNavMenuOpen(false)}>Kentfield, CA Menu</Link>
        </div>
        </>
    )
}

export default NavMenuDropBox