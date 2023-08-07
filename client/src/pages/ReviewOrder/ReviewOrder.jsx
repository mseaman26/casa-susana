import React, { useEffect } from "react";
import menuData from '../../assets/menu.json'
import { Link } from "react-router-dom";

const ReviewOrder = function ({ order, setOrder }){

    const orderArray = []
    for(let orderItem in order){
        orderArray.push({name: orderItem, quantity: order[orderItem]})

    }
    console.log(orderArray)

    const addOne = (itemName) => {
        setOrder ((prevState) => ({
            ...prevState,
            [itemName]: prevState[itemName]+1
        }))
    }
    const removeOne = (itemName) => {
        if(order[itemName] > 0){
            setOrder((prevState) => ({
                ...prevState,
                [itemName]: prevState[itemName] - 1
            }))
        }
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
            {orderArray.map((orderItem, index) => {
                let prices = getPrices(orderItem.name, orderItem.quantity )
                return(
                    <div key={index}>
                    <h3>{orderItem.name}: Quantity: {orderItem.quantity}, Price: {prices[0]}, Item Total: {prices[1]}</h3>
                    <button onClick={() => addOne(orderItem.name)}>+</button>
                    <button onClick={() => removeOne(orderItem.name)}>-</button>
                    </div>
                    
                )
            })}
        </>
    )
}

export default ReviewOrder