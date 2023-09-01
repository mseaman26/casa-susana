import React from "react";
import './OrderItem.css'

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
        <div className="OrderItem_container" onClick={addItem}>
            <div className="single_item_container">
                <div className="item_name_and_price"><span>{menuItem.name}</span> <span>${menuItem.price}</span></div>
                <p>{`${menuItem.description}`}</p>
                {/* <button onClick={addItem}>Add to cart</button>
                <p>In your cart: {order[menuItem.name]? order[menuItem.name]: 0}</p> */}
            </div>
        </div>
    )
}

export default OrderItem