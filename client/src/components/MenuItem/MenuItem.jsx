import React from 'react';

const MenuItem = function({menuItem}){
    return(
        <>
        <h3>{menuItem.name}: ${menuItem.price}</h3>
        <p>{`${menuItem.description}`}</p>
        </>
    )
}

export default (MenuItem)