import React from 'react';
import './MenuItem.css'

const MenuItem = function({menuItem}){
    return(
        <>
        <div className='menu_item_div'>
            <div className='menu_name_price_div'>
                <h3 className='menu_item_name'>{menuItem.name}</h3>
                <h3 className='menu_item_price'>${menuItem.price}</h3>
            </div>
            
            <p className='menu_item_description'>{`${menuItem.description}`}</p>
        </div>
        </>
    )
}

export default (MenuItem)