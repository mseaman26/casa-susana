import React from "react";
import menuData from '../../assets/menu.json'
import MenuItem from "../../components/MenuItem/MenuItem";
import './Menu.css'
import { animateScroll as scroll, scroller } from "react-scroll";

const Menu = function(){

    const groupedMenuData = {};
     menuData.forEach(menuItem => {
         const { section } = menuItem;
         if (!groupedMenuData[section]) {
             groupedMenuData[section] = [];
         }
         groupedMenuData[section].push(menuItem);
     });

    const scrollToSection = (section) => {
        scroller.scrollTo(section, {
            duration: 800,
            delay: 0,
            smooth: 'easeInOutQuart',
            offset: -120
        });
    };

    return(
        <>
        <div className="menu_page_container">
            <div className="menu_header">
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
            </div>
            <div className="menu_items_container">
                {Object.keys(groupedMenuData).map(section => (
                    <div key={section} className="menu_section" id={section}>
                        <h2>{section}</h2>
                        {groupedMenuData[section].map((menuItem, index) => (
                            <MenuItem menuItem={menuItem} key={index} />
                        ))}
                    </div>
                ))}
            </div>
        </div>
        </>
    )
}

export default Menu