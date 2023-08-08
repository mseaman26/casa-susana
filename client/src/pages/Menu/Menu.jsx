import React from "react";
import menuData from '../../assets/menu.json'
import MenuItem from "../../components/MenuItem/MenuItem";
import './Menu.css'

const Menu = function(){

    const groupedMenuData = {};
     menuData.forEach(menuItem => {
         const { section } = menuItem;
         if (!groupedMenuData[section]) {
             groupedMenuData[section] = [];
         }
         groupedMenuData[section].push(menuItem);
     });

    return(
        <>
        <div className="menu_page_container">
        <h1>Menu</h1>
        
            {Object.keys(groupedMenuData).map(section => (
                <div key={section} className="menu_section">
                    <h2>{section}</h2>
                    {groupedMenuData[section].map((menuItem, index) => (
                        <MenuItem menuItem={menuItem} key={index} />
                    ))}
                </div>
            ))}
        </div>
        </>
    )
}

export default Menu