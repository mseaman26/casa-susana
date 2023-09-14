import React, { useEffect, useRef } from "react";
import closeIcon from '../../assets/images/icons8-close-30.png'
import './ReviewOrder.css'


const ReviewOrder = function ({ order, setOrder, menuData }){

    const reviewContainerRef= useRef(null)

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
        setOrder(updatedOrder)
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

    useEffect(() => {
        if (reviewContainerRef.current) {
            reviewContainerRef.current.scrollTop = 0; 
        }
      }, []);

    return(
        <div className="review_order_container" ref={reviewContainerRef}>
            <div className="review_order_body"> 
                <div className="check_location_review">{checkLocationText}</div>
                <div className="not_taking_orders">{notTakingOrdersTextTop}<br/><br/>{notTakingOrdersTextBottom}<a href={`tel:18312479385`}>1-(831)-247-9385</a></div>
                <div className="order_review_container">
                    <div className="order_review_head">
                        <p>QTY</p>
                        <p>Item</p>
                        <p>Price</p>
                    </div>
                    <div className="order_review_body">
                        {orderArray.map((orderItem, index) => {
                            let prices = getPrices(orderItem.name, orderItem.quantity )
                            return(
                                <>
                                    <p>{orderItem.quantity}</p>
                                    <p>{orderItem.name}</p>
                                    <div className="price_and_remove_button">
                                        <div>{prices[1]}</div><div className='remove_item_button_container' onClick={() => clearItem(orderItem.name)}><img className="remove_item_button" src={closeIcon}/></div>
                                    </div>
                                    {/* <div key={index} className="review_item">
                                        <h3>{orderItem.name}: Quantity: {orderItem.quantity}, Price: {prices[0]}, Item Total: {prices[1]}</h3>
                                    
                                        <button onClick={() => clearItem(orderItem.name)}>Clear Item From Order</button>
                                    </div> */}
                                </>
                            )
                        })}
                    </div>
                    <div className="order_review_totals">
                        <p>Sub-Total</p>
                        <p className="total_right">{subTotal}</p>
                        <div></div>
                        <p>Tax</p>
                        <p className="total_right">{tax}</p>
                        <div></div>
                        <h3>Total</h3>
                        <h3 className="total_right">{GrandTotal}</h3>
                    </div>
                </div>
            </div>
            <div className="revew_order_footer">
                <div className="place_pickup_order">
                    <div className="subtotal"><p>TOTAL</p><p>${GrandTotal}</p></div>
                    <div className="place_order_button">Place Pickup Order Now</div>
                </div>
            </div>
        </div>
    )
}

export default ReviewOrder