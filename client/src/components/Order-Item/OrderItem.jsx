import React from "react";

const OrderItem = function({ menuItem, order, setOrder}){

    const addItem = () => {
        if(!order[menuItem.name]){
            setOrder((prevState) => ({
                ...prevState,
                [menuItem.name]: 1
            }))
        }else{
            setOrder((prevState) => ({
                ...prevState,
                [menuItem.name]: order[menuItem.name] + 1
            }))
        }
    }

    return(
        <>
        <h3>{menuItem.name}: ${menuItem.price}</h3>
        <p>{`${menuItem.description}`}</p>
        <button onClick={addItem}>Add to cart</button>
        <p>In your cart: {order[menuItem.name]? order[menuItem.name]: 0}</p>
        </>
    )
}

export default OrderItem