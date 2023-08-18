import React, {useState, useEffect}from 'react';
import { NavLink, Link } from 'react-router-dom';
import './Header.css'
import logo_placeholder from '../../assets/images/logo_placeholder.png'
import orderOnlineImage from '../../assets/images/order-now.png'
import { slide as Menu } from 'react-burger-menu';


function Header() {

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const[menuOpen, setMenuOpen] = useState(false)
    const closeMenu = () => {
      setMenuOpen(false)
    }

    useEffect(() => {
        function handleResize() {
          setWindowWidth(window.innerWidth);
        }
        console.log(windowWidth)
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
      }, []);

      const showMenu = windowWidth < 890;
    
    return(
        <>
        
        <nav className='custom_nav'>
            <div id='nav_left'>
                <NavLink to="/" activeclassname="active"><img src={logo_placeholder} id='logo'></img></NavLink>
            </div>
            <div id='nav_right'>
            {showMenu ? (
                  <Menu className='col-6' right isOpen={menuOpen} onStateChange={(state) => setMenuOpen(state.isOpen)}>
                    <a className="menu-item" href="/" onClick={closeMenu}>
                      Home
                    </a>
                    <a className="menu-item" href="/#/projects" onClick={closeMenu}>
                      Projects
                    </a>
                    <a className="menu-item" href="/#/resume" onClick={closeMenu}>
                      Resume
                    </a>
                    <a className="menu-item" href="/#/contact" onClick={closeMenu}>
                      Contact
                    </a>
                  </Menu>
                   
                ) : (
                    <>
                    <div className='nav_item_right'>
                    <NavLink to="/menu" activeclassname="active" className='nav_link'>MENU</NavLink>
                    </div>
                    <div className='nav_item_right'>
                        <NavLink to="/contact" activeclassname="active" className='nav_link'>LOCATIONS</NavLink>
                    </div>
                    <div className='nav_item_right'>
                        <NavLink to="/ourstory" activeclassname="active" className='nav_link'>OUR STORY</NavLink>
                    </div>
                    <div id='order_online_link_container'>
                        <NavLink to="/order">
                            <img src={orderOnlineImage} id='order_online_image'/>
                        </NavLink>
                    </div>
                </>
                )}
               

            </div>
        </nav>  
        </>
    )
}

export default Header