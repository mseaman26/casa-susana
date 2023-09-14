import React, {useEffect} from "react";
import MenuItem from "../../components/MenuItem/MenuItem";
import './Menu.css'
import { animateScroll as scroll } from 'react-scroll';
import civiche from '../../assets/images/civiche.jpeg'



const Menu = function({menuData}){

    const groupedMenuData = {};
     menuData.forEach(menuItem => {
         const { section } = menuItem;
         if (!groupedMenuData[section]) {
             groupedMenuData[section] = [];
         }
         groupedMenuData[section].push(menuItem);
     });


    useEffect(() => {
        // Scroll to the top of the page on component mount
        scroll.scrollToTop();
    }, [menuData]);

    return(
        <>
        <div className="menu_page_container">
            {/* <div className="menu_header">
                <h1>Menu</h1>
                <div>
                    <button onClick={() => scrollToSection('Appetizers')}>Appetizers</button>
                    <button onClick={() => scrollToSection('Small Plates')}>Small Plates</button>
                    <button onClick={() => scrollToSection('Combinations')}>Combinations</button>
                    <button onClick={() => scrollToSection('Main Courses')}>Main Courses</button>
                    <button onClick={() => scrollToSection('Sides')}>Sides</button>
                    <button onClick={() => scrollToSection('Desserts')}>desserts</button>
                    <button onClick={() => scrollToSection('Beverages')}>Beverages</button>
                </div>
            </div> */}
            <img src={civiche} id="civiche_image_menu"></img>
            <div className="menu_items_container">
                {Object.keys(groupedMenuData).map(section => (
                    <div key={section} className="menu_section" id={section}>
                        <h2 className="menu_section_header">{section}</h2>
                        <div className="menu_items_section_menuPage">
                        {groupedMenuData[section].map((menuItem, index) => (
                            <MenuItem menuItem={menuItem} key={index} />
                        ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
        </>
    )
}

export default Menu