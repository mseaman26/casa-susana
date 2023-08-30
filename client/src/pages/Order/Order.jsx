import React, {useEffect, useState} from "react";
import './Order.css'
import OrderItem from "../../components/Order-Item/OrderItem";
import ReviewOrder from '../../pages/ReviewOrder/ReviewOrder'
import { Link } from "react-router-dom";
import { animateScroll as scroll, scroller } from "react-scroll";
import shoppingCartImage from '../../assets/images/shoppingCart.png'
import menuIcon from '../../assets/images/menu_icon.png'
import civiche from '../../assets/images/civiche.jpeg'


const Order = function ({ order, setOrder, menuData }){

    const [currentTab, setCurrentTab] = useState('order')

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
                        <div id="menu_icon_container" className={`${currentTab === 'order'? 'order_nav_active' : "order_nav_item "}`} onClick={()=>setCurrentTab('order')}>
                            <img src={menuIcon} id="menu_icon"/>
                        </div>
                        <div id="cart_icon_container" className={`order_nav_item ${currentTab === 'review'? 'order_nav_active' : ""}`} onClick={()=>setCurrentTab('review')}>
                            <img id="shopping_cart" src={shoppingCartImage} />
                            {getOrderQuantity() > 0 ? (
                            <div id="cart_quantity">{getOrderQuantity()}</div>
                            ) : <></>}
                        </div>
                        
                    </div>
                </div>
                
                {/* order tab */}
                {currentTab === 'order'? (
                    <>
                <img src={civiche} id="civiche_order_page"/> 
                <div className="order_items_container">
                    <img/>
                    {Object.keys(groupedMenuData).map(section => (
                        <div key={section} className="order_section" id={section}>
                            <h2>{section}</h2>
                            {groupedMenuData[section].map((menuItem, index) => (
                                <OrderItem menuItem={menuItem} key={index} order={order} setOrder={setOrder}/>
                            ))}
                        </div>
                    ))}
                </div>
                </>
                ) : <></>}
                {/* review Tab */}
                {currentTab === 'review'? (
                    <div id="review_tab_container">
                       <ReviewOrder order={order} setOrder={setOrder} menuData={menuData}/>
                    </div>
                ) : <></>}
            </div>
        </div>
        </>
    )
}

export default Order