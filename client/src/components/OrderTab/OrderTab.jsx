import React from "react";
import './OrderTab.css'

const OrderTab = () => {
    return (
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
    )
}

export default OrderTab