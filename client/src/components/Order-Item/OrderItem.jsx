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
        localStorage.setItem('order', JSON.stringify(order))
    }

    return(
        <>
        <h1>{menuItem.name}</h1>
        <p>{`${menuItem.description}`}</p>
        <button onClick={addItem}>Add to cart</button>
        </>
    )
}

export default OrderItem