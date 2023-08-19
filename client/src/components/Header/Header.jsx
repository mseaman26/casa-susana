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

    const handleMenuOutsideClick = event => {
        if (!event.target.closest('.bm-menu-wrap')) {
          setMenuOpen(false);
        }
      };
    
      useEffect(() => {
        if (menuOpen) {
          document.addEventListener('click', handleMenuOutsideClick);
        }
    
        return () => {
          document.removeEventListener('click', handleMenuOutsideClick);
        };
      }, [menuOpen]);

    useEffect(() => {
        function handleResize() {
          setWindowWidth(window.innerWidth);
        }
        console.log(windowWidth)
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
      }, []);

      const showMenu = windowWidth < 890;
      //890
    return(
        <>
        
        <nav className='custom_nav'>
            <div id='nav_left'>
                <NavLink to="/" activeclassname="active"><img src={logo_placeholder} id='logo'></img></NavLink>
            </div>
            <div id='nav_right'>
            {showMenu ? (
                  <Menu className={`col-6 bm-menu-wrap ${menuOpen ? 'bm-menu-open' : ''}`} right isOpen={menuOpen} onStateChange={(state) => setMenuOpen(state.isOpen)} overlay>
                    <a className="menu-item" href="/menu" onClick={closeMenu}>
                      MENU
                    </a>
                    <a className="menu-item" href="/order" onClick={closeMenu}>
                      ORDER ONLINE
                    </a>
                    <a className="menu-item" href="/ourstory" onClick={closeMenu}>
                      OUR STORY
                    </a>
                    <a className="menu-item" href="/locations" onClick={closeMenu}>
                      LOCATIONS
                    </a>
                  </Menu>
                   
                ) : (
                    <>
                    
                    <NavLink to="/menu" activeclassname="active" className='nav_link'>
                      <div className='nav_item_right'>MENU</div>
                    </NavLink>
                    <NavLink to="/contact" activeclassname="active" className='nav_link'>
                      <div className='nav_item_right'>LOCATIONS</div>
                    </NavLink>
                    <NavLink to="/ourstory" activeclassname="active" className='nav_link'>
                      <div className='nav_item_right'>OUR STORY</div>
                    </NavLink>
                    <div id='order_online_link_container'>
                        <Link to="/order">
                            <img src={orderOnlineImage} id='order_online_image'/>
                        </Link>
                    </div>
                </>
                )}
               

            </div>
        </nav>  
        </>
    )
}

export default Header