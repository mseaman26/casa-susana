import React, { useEffect } from "react";
import menuData from '../../assets/menu.json'
import { Link } from "react-router-dom";

const ReviewOrder = function ({ order, setOrder }){

    let orderArray = []
    console.log(order)

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
    const getSubtotal = () => {
        let subtotal = 0.00
        for(let item in order){
            for(let i = 0; i < menuData.length; i++){
                if(menuData[i].name === item){
                    subtotal += menuData[i].price * order[item]
                    break
                }
            }
        }
        return subtotal.toFixed(2)
    }

    const clearOrderArray = () => {
        orderArray = []
    }

    let subTotal = getSubtotal()
    let tax = (subTotal * .0725).toFixed(2)
    let GrandTotal = (parseFloat(subTotal) + parseFloat(tax)).toFixed(2)



    return(
        <>
            <h1>Your Order</h1>
            <Link onClick={clearOrderArray} to='/order'>Continue Ordering</Link>
            {orderArray.map((orderItem, index) => {
                let prices = getPrices(orderItem.name, orderItem.quantity )
                return(
                    <div key={index} className="review_item">
                        <h3>{orderItem.name}: Quantity: {orderItem.quantity}, Price: {prices[0]}, Item Total: {prices[1]}</h3>
                        <button onClick={() => removeOne(orderItem.name)}>-</button>
                        <button onClick={() => addOne(orderItem.name)}>+</button>
                    </div>
                    
                )
            })}
            <h1>Subtotal: {subTotal}</h1>
            <h1>Tax: {tax}</h1>
            <h1>GrandTotal: {GrandTotal}</h1>
        </>
    )
}

export default ReviewOrder