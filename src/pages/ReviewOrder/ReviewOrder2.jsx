import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const ReviewOrder2 = function ({ order2, setOrder2, menuData }){

    let orderArray = []
    console.log(order2)

    for(let orderItem in order2){
        orderArray.push({name: orderItem, quantity: order2[orderItem]})
    }

    const addOne = (itemName) => {
        setOrder2 ((prevState) => ({
            ...prevState,
            [itemName]: prevState[itemName]+1
        }))
    }
    const removeOne = (itemName) => {
        if(order2[itemName] > 0){
            setOrder2((prevState) => ({
                ...prevState,
                [itemName]: prevState[itemName] - 1
            }))
        }
    }

    const clearItem = (itemName) => {
        console.log(itemName)
        const updatedOrder = {...order2}
        delete updatedOrder[itemName]
        setOrder2(updatedOrder)
    }

    const getPrices = (itemName, quantity) =>{
        for(let i = 0; i <menuData.length; i ++){
            if(menuData[i].name === itemName){
                return [menuData[i].price, menuData[i].price * quantity]
            }
        }
    }
    const getSubtotal = () => {
        let subtotal = 0.00
        for(let item in order2){
            for(let i = 0; i < menuData.length; i++){
                if(menuData[i].name === item){
                    subtotal += menuData[i].price * order2[item]
                    break
                }
            }
        }
        return subtotal.toFixed(2)
    }

    

    let subTotal = getSubtotal()
    let tax = (subTotal * .0725).toFixed(2)
    let GrandTotal = (parseFloat(subTotal) + parseFloat(tax)).toFixed(2)



    return(
        <>
            <h1>Your Order</h1>
            {orderArray.map((orderItem, index) => {
                let prices = getPrices(orderItem.name, orderItem.quantity )
                return(
                    <div key={index} className="review_item">
                        <h3>{orderItem.name}: Quantity: {orderItem.quantity}, Price: {prices[0]}, Item Total: {prices[1]}</h3>
                        <button onClick={() => removeOne(orderItem.name)}>-</button>
                        <button onClick={() => addOne(orderItem.name)}>+</button>
                        <button onClick={() => clearItem(orderItem.name)}>Clear Item From Order</button>
                    </div>
                    
                )
            })}
            <h1>Subtotal: {subTotal}</h1>
            <h1>Tax: {tax}</h1>
            <h1>GrandTotal: {GrandTotal}</h1>
            {orderArray.length > 0 ? (
                <Link to={'/order/checkout'}>Proceed to Checkout</Link>
            ): <></>}
        </>
    )
}

export default ReviewOrder2