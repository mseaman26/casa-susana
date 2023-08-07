import React from "react";
import menuData from '../../assets/menu.json'

const ReviewOrder = function ({ order, setOrder }){

    const orderArray = []
    for(let orderItem in order){
        orderArray.push({name: orderItem, quantity: order[orderItem]})
    }

    const getPrice = (itemName) =>{
        for(let i = 0; i <order.length; i ++){

        }
    }

    return(
        <>
            <h1>Your Order</h1>
            {orderArray.map((orderItem) => {
                return(
                    <h3>{orderItem.name}: Quantity: {orderItem.quantity} Price: {}</h3>
                )
            })}
        </>
    )
}

export default ReviewOrder