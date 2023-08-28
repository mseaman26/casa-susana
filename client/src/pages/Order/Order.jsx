import React from "react";
import './Order.css'
import OrderItem from "../../components/Order-Item/OrderItem";
import { Link } from "react-router-dom";
import { animateScroll as scroll, scroller } from "react-scroll";


const Order = function ({ order, setOrder, menuData }){


    const getOrderQuantity = () => {
        let quantity = 0
        for(let item in order){
            quantity += order[item]
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

     const scrollToSection = (section) => {
        scroller.scrollTo(section, {
            duration: 800,
            delay: 0,
            smooth: 'easeInOutQuart',
            offset: -150
        });
    };

    
    return(
        <>
        <div id="overlay_container">
            <div id="order_container">
                <div className="order_header">
                    <h1 id='online_order_heading'>Place Order Online </h1>
                    <div id='cart_info'>
                        {'<'}shopping cart icon{'>'}: {getOrderQuantity()}, Subtotal: ${getSubtotal().toFixed(2)}<Link to={'/order/review'}>Review Order</Link>
                    </div>
                    {/* <div>
                        <button onClick={() => scrollToSection('Appetizers')}>Appetizers</button>
                        <button onClick={() => scrollToSection('Small Plates')}>Small Plates</button>
                        <button onClick={() => scrollToSection('Combinations')}>Combinations</button>
                        <button onClick={() => scrollToSection('Main Courses')}>Main Courses</button>
                        <button onClick={() => scrollToSection('Sides')}>Sides</button>
                        <button onClick={() => scrollToSection('Desserts')}>desserts</button>
                        <button onClick={() => scrollToSection('Beverages')}>Beverages</button>
                    </div> */}
                </div>
                <div className="order_items_container">
                    {Object.keys(groupedMenuData).map(section => (
                        <div key={section} className="order_section" id={section}>
                            <h2>{section}</h2>
                            {groupedMenuData[section].map((menuItem, index) => (
                                <OrderItem menuItem={menuItem} key={index} order={order} setOrder={setOrder}/>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </div>
        </>
    )
}

export default Order