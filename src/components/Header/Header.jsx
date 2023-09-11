import React, {useState, useEffect}from 'react';
import { NavLink, Link } from 'react-router-dom';
import './Header.css'
import logo_placeholder from '../../assets/images/logo_placeholder.png'
import logo from '../../assets/images/Mama_Suzana_Mexican Cantina__CircleFullLogo.png'
import orderOnlineImage from '../../assets/images/order-now.png'
import NavMenuDropBox from '../NavMenuDropBox/NavMenuDropBox';
import { slide as Menu } from 'react-burger-menu';


function Header() {

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [menuOpen, setMenuOpen] = useState(false)
    const [isNavMenuOpen, setIsNavMenuOpen] = useState(false)
    const [isExpanded, setIsExpanded] = useState(false)

    const closeMenu = () => {
      setMenuOpen(false)
      setIsExpanded(false)
    }

    const handleNavMenuHover = () => {
      setIsNavMenuOpen(true)
    }
    const handleNavMenuMouseLeave = () => {
      setIsNavMenuOpen(false);
    }

    const toggleMenuBurgerHeight = () => {
      const element = document.getElementById('burger_submenu'); // Change this to your element's ID or ref
      console.log('toggle function')
      if (element) {
        const currentHeight = window.getComputedStyle(element).height;
        console.log('current height' , currentHeight)
        if (currentHeight === '0px') {
          setIsExpanded(true);
        } else {
          setIsExpanded(false);
        }
      }
    };

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

      const burgerSubmenuStyles = { height: isExpanded ? '80px' : '0px', border: isExpanded ? '1px solid black' : 'none', marginTop: isExpanded ? '20px' : '0px',transition: 'height 0.3s ease'}

    return(
        <>
        
        <nav className='custom_nav'>
            <div id='nav_left'>
                <NavLink to="/" activeclassname="active"><img src={logo} id='logo'></img></NavLink>
            </div>
            <div id='nav_right'>
            {showMenu ? (
                  <Menu className={`col-6 bm-menu-wrap ${menuOpen ? 'bm-menu-open' : ''}`} right isOpen={menuOpen} onStateChange={(state) => setMenuOpen(state.isOpen)} overlay>
                    <a className="menu-item" onClick={toggleMenuBurgerHeight} id='menu_burger_nav'>
                      MENU
                      <div id='burger_submenu' style={burgerSubmenuStyles}>
                        <div id='burger_location1'><a href='/#/menu/location1' onClick={closeMenu}>location1</a></div>
                        <div><a href='/#/menu/location2' onClick={closeMenu}>location2</a></div>
                      </div>
                    </a>
                    
                    <a className="menu-item" href="/#/orderlocations" onClick={closeMenu}>
                      ORDER ONLINE
                    </a>
                    <a className="menu-item" href="/#/ourstory" onClick={closeMenu}>
                      OUR STORY
                    </a>
                    <a className="menu-item" href="/#/orderlocations" onClick={closeMenu}>
                      LOCATIONS
                    </a>
                  </Menu>
                   
                ) : (
                    <>
                    <div onMouseEnter={handleNavMenuHover} onMouseLeave={handleNavMenuMouseLeave}>
                    <NavLink to='/menu'  activeclassname="active" className='nav_link' onClick={(e) => e.preventDefault()}>
                      <div className='nav_item_right'>MENU
                      {isNavMenuOpen && <NavMenuDropBox  id='nav_menu_drop_box' isNavMenuOpen={isNavMenuOpen} setIsNavMenuOpen={setIsNavMenuOpen}/>}
                      </div>
                      
                    </NavLink>
                    </div>
                    <NavLink to="/orderlocations" activeclassname="active" className='nav_link'>
                      <div className='nav_item_right'>LOCATIONS</div>
                    </NavLink>
                    <NavLink to="/ourstory" activeclassname="active" className='nav_link'>
                      <div className='nav_item_right'>OUR STORY</div>
                    </NavLink>
                    <div id='order_online_link_container'>
                        <Link to="/orderlocations" id='order_online_link'>
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