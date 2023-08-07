import React from "react";
import menuData from '../../assets/menu.json'
import { Link } from "react-router-dom";

const ReviewOrder = function ({ order, setOrder }){

    const orderArray = []
    for(let orderItem in order){
        orderArray.push({name: orderItem, quantity: order[orderItem]})
    }

    const getPrices = (itemName, quantity) =>{
        for(let i = 0; i <menuData.length; i ++){
            if(menuData[i].name === itemName){
                return [menuData[i].price, menuData[i].price * quantity]
            }
        }
    }

    return(
        <>
            <h1>Your Order</h1>
            <Link to='/order'>Continue Ordering</Link>
            {orderArray.map((orderItem) => {
                let prices = getPrices(orderItem.name, orderItem.quantity )
                return(
                    <h3>{orderItem.name}: Quantity: {orderItem.quantity}, Price: {prices[0]}, Item Total: {prices[1]}</h3>
                )
            })}
        </>
    )
}

export default ReviewOrder