import React, { useEffect, useState } from "react";
import menuData from '../../assets/menu.json'
import './Order.css'
import OrderItem from "../../components/Order-Item/OrderItem";

const Order = function (){

    const [order, setOrder] = useState(JSON.parse(localStorage.getItem('order'))|| {})
    console.log(order)

    useEffect(() => {
        localStorage.setItem('order', JSON.stringify(order))
    }, [order])
    return(
        <>
        <h1 id='online_order_header'>Place Order Online </h1>
        <h3>{'<'}shopping cart icon{'>'}</h3>
        {menuData.map((menuItem, index) => {
            return(
                <OrderItem menuItem={menuItem} key={index} order={order} setOrder={setOrder}/>
            )
        })}
        </>
    )
}

export default Order