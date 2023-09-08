import React, {useState} from "react";
import './OrderLocations.css'
import civiche from '../../assets/images/civiche.jpeg'
import { Link } from "react-router-dom";
import Order from "../Order/Order";
import Order2 from '../Order/Order2'
import menuData1 from '../../assets/menu1.json'
import menuData2 from '../../assets/menu2.json'
import shoppingCartImage from '../../assets/images/shoppingCart.png'

const OrderLocations = ({order, setOrder, order2, setOrder2}) => {

    const [oder1shown, setOrder1Shown] = useState(false)
    const [order2Shown, setOrder2Shown] = useState(false)

    return(
        <>
        {/* <Order menuData={menuData1} order={order} setOrder={setOrder} /> */}
        {oder1shown? (
           <Order menuData={menuData1} order={order} setOrder={setOrder} setOrder1Shown={setOrder1Shown}/> 
        ) : <></>}
        {order2Shown? (
           <Order2 menuData={menuData2} order2={order2} setOrder2={setOrder2} setOrder2Shown={setOrder2Shown}/> 
        ) : <></>}
        <div id="order_locations_page">
            <div id="order_online_page_image_container">
                <img src={civiche} id="order_online_page_image"></img>
                <h1>ORDER ONLINE</h1>
            </div>
        </div>
        <div id="order_locations_info">
            <p>Please double-check the pick-up location before clicking the order now button.</p>
            <p>*No Refunds are given for selecting the incorrect pick-up location for online orders.</p>
            <div id="order_location_choices">
                <div className="order_location_choice">
                    <h1>Location 1</h1>
                    <p>street address<br/>city state<br/>1(555)-555-5555</p>
                    <Link className="order_location_link" onClick={()=>setOrder1Shown(true)}>ORDER NOW</Link> 
                </div>
                <div className="order_location_choice">
                    <h1>Location 2</h1>
                    <p>street address<br/>city state<br/>1(555)-555-5555</p>
                    <Link className="order_location_link" onClick={()=>setOrder2Shown(true)}>ORDER NOW</Link>
                </div>
            </div>
        </div>
        </>
    )
}

export default OrderLocations