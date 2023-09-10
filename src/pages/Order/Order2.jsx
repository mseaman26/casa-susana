import React, {useEffect, useState, useRef} from "react";
import './Order.css'
import OrderItem2 from "../../components/Order-Item/OrderItem2";
import ReviewOrder2 from '../../pages/ReviewOrder/ReviewOrder2'
import { Link } from "react-router-dom";
import { animateScroll as scroll, scroller } from "react-scroll";
import shoppingCartImage from '../../assets/images/shoppingCart.png'
import menuIcon from '../../assets/images/menu_icon.png'
import civiche from '../../assets/images/civiche.jpeg'


const Order2 = function ({ order2, setOrder2, menuData, setOrder2Shown }){

    const [currentTab, setCurrentTab] = useState('order')
    const [orderHeaderText, setOrderHeaderText] = useState('PLACE ORDER ONLINE')
    const [orderHeaderButtonShown, setOrderHeaderButtonShown] = useState(false)
    const [itemFormShown, setItemFormShown] = useState(false)
    const menuItemRef = useRef(null)
  
    const scrollToMenuItem = (index) => {
        const menuItems = menuItemRef.current
        const menuItemNodes = menuItems.querySelectorAll('div')[index]
        menuItemNodes.scrollTo({behavior: 'smooth'})
    }

    const getOrderQuantity = () => {
        return Object.keys(order2).length
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
                    {orderHeaderButtonShown ? (
                        <button></button>
                    ) : <></>}
                    <span id='online_order_heading'>{orderHeaderText}</span>
                    <div id='cart_info'>
                        {orderHeaderButtonShown ? (
                            <></>
                        ) : (
                            <>
                            <div id="menu_icon_container" className={`${currentTab === 'order'? 'order_nav_active' : "order_nav_item "}`} onClick={()=>setCurrentTab('order')}>
                                <img src={menuIcon} id="menu_icon"/>
                            </div>
                            <div id="cart_icon_container" className={`order_nav_item ${currentTab === 'review'? 'order_nav_active' : ""}`} onClick={()=>setCurrentTab('review')}>
                                <img id="shopping_cart" src={shoppingCartImage} />
                                {getOrderQuantity() > 0 ? (
                                <div id="cart_quantity">{getOrderQuantity()}</div>
                            ) : <></>}
                            </div>
                            {currentTab !== 'review' ? (
                                 <div id="order_close_button" onClick={()=>setOrder1Shown(false)}>CLOSE X</div>
                            ) : <></>}
                            </>
                        )}
                        
                        
                    </div>
                </div>
                
                {/* order tab */}
                {currentTab === 'order'? (
                    <>
                <img src={civiche} id="civiche_order_page"/> 
                <div className="order_items_container">
                    <img/>
                    {Object.keys(groupedMenuData).map((section, index) => (
                        <div key={index} className="order_section" id={section}>
                            <h2>{section}</h2>
                            <div className="menu_items_in_section" ref={menuItemRef}>
                            {groupedMenuData[section].map((menuItem, index) => (
                                    <OrderItem2 menuItem={menuItem} index={index} key={index} order2={order2} setOrder2={setOrder2} scrollToMenuItem={scrollToMenuItem} setOrderHeaderText={setOrderHeaderText} setOrderHeaderButtonShown={setOrderHeaderButtonShown} />
                            ))}
                            </div>
                        </div>
                    ))}
                </div>
                </>
                ) : <></>}
                {/* review Tab */}
                {currentTab === 'review'? (
                    <div id="review_tab_container">
                       <ReviewOrder2 order2={order2} setOrder2={setOrder2} menuData={menuData}/>
                    </div>
                ) : <></>}
            </div>
        </div>
        </>
    )
}

export default Order2