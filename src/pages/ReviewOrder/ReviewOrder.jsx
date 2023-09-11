import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import './ReviewOrder.css'


const ReviewOrder = function ({ order, setOrder, menuData }){

    let orderArray = []
    console.log(order)

    for(let orderItem in order){
        orderArray.push({name: orderItem, quantity: order[orderItem]})
    }

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

    const clearItem = (itemName) => {
        console.log(itemName)
        const updatedOrder = {...order}
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

    

    let subTotal = getSubtotal()
    let tax = (subTotal * .0725).toFixed(2)
    let GrandTotal = (parseFloat(subTotal) + parseFloat(tax)).toFixed(2)

    const checkLocationText = 'Please double-check the pick-up location before clicking the order now button. *No Refunds are given for selecting the incorrect pick-up location for online orders.'

    const notTakingOrdersTextTop = 'Sorry, we are not taking online orders right now, but check back soon to see if we are available to take your order'
    const notTakingOrdersTextBottom = 'You may still call us for other matters at: '

    return(
        <div className="review_order_container">
            <div className="review_order_body"> 
                <div className="check_location_review">{checkLocationText}</div>
                <div className="not_taking_orders">{notTakingOrdersTextTop}<br/><br/>{notTakingOrdersTextBottom}<a href={`tel:18312479385`}>1-(831)-247-9385</a></div>
                
                {orderArray.map((orderItem, index) => {
                    let prices = getPrices(orderItem.name, orderItem.quantity )
                    return(
                        // <div key={index} className="review_item">
                        //     <h3>{orderItem.name}: Quantity: {orderItem.quantity}, Price: {prices[0]}, Item Total: {prices[1]}</h3>
                        //     <button onClick={() => removeOne(orderItem.name)}>-</button>
                        //     <button onClick={() => addOne(orderItem.name)}>+</button>
                        //     <button onClick={() => clearItem(orderItem.name)}>Clear Item From Order</button>
                        // </div>
                        <></>
                    )
                })}
                <h1>Subtotal: {subTotal}</h1>
                <h1>Tax: {tax}</h1>
                <h1>GrandTotal: {GrandTotal}</h1>
            </div>
            <div className="revew_order_footer">
                
            </div>
        </div>
    )
}

export default ReviewOrder