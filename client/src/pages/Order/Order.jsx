import React, { useEffect, useState } from "react";
import menuData from '../../assets/menu.json'
import './Order.css'
import OrderItem from "../../components/Order-Item/OrderItem";
import { Link } from "react-router-dom";

const Order = function ({ order, setOrder }){


    const getOrderQuantity = () => {
        let quantity = 0
        for(let item in order){
            quantity += order[item]
            console.log(quantity)
        }
        return quantity
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
        return subtotal
    }

     // Group menu items by section
     const groupedMenuData = {};
     menuData.forEach(menuItem => {
         const { section } = menuItem;
         if (!groupedMenuData[section]) {
             groupedMenuData[section] = [];
         }
         groupedMenuData[section].push(menuItem);
     });

    
    return(
        <>
        <h1 id='online_order_header'>Place Order Online </h1>
        <div id='cart_info'>
            <h3>{'<'}shopping cart icon{'>'}: {getOrderQuantity()}</h3>
            <h3>Subtotal: ${getSubtotal().toFixed(2)}</h3>
            <Link to={'/review'}>Review Order</Link>
        </div>
        {Object.keys(groupedMenuData).map(section => (
            <div key={section} className="order_section">
                <h2>{section}</h2>
                {groupedMenuData[section].map((menuItem, index) => (
                    <OrderItem menuItem={menuItem} key={index} order={order} setOrder={setOrder}/>
                ))}
            </div>
        ))}
        </>
    )
}

export default Order