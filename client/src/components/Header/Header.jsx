import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'
import logo_placeholder from '../../assets/images/logo_placeholder.png'
import orderOnlineImage from '../../assets/images/order-now.png'

function Header() {

    const [headerHeight, setHeaderHeight] = useState(0);

    useEffect(() => {
        // Calculate and set the header height dynamically
        const headerElement = document.querySelector('.custom_nav');
        if (headerElement) {
          setHeaderHeight(headerElement.clientHeight);
        }
      }, []);

    return(
        <>
        <nav className='custom_nav'>
            <div id='nav_left'>
                <NavLink to="/" activeclassname="active"><img src={logo_placeholder} id='logo'></img></NavLink>
            </div>
            <div id='nav_right'>
                <div className='nav_item_right'>
                    <NavLink to="/menu" activeclassname="active" className='nav_link'>MENU</NavLink>
                </div>
                <div className='nav_item_right'>
                    <NavLink to="/contact" activeclassname="active" className='nav_link'>LOCATIONS</NavLink>
                </div>
                <div className='nav_item_right'>
                    <NavLink to="/#" activeclassname="active" className='nav_link'>OUR STORY</NavLink>
                </div>
                <div id='order_online_link_container'>
                    <NavLink to="/order">
                        <img src={orderOnlineImage} id='order_online_image'/>
                    </NavLink>
                </div>
            </div>
        </nav>  
        </>
    )
}

export default Header