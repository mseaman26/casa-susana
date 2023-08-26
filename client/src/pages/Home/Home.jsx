import React from "react";
import './Home.css'
import ceviche from '../../assets/images/civiche.jpeg'
import tacos from '../../assets/images/tacos_cropped.jpeg'

const Home = function() {
    return(
        <div id="home_page_container">
            <img id='civiche_image' src={ceviche}></img>
            <div id="join_the_club">
                <div id="join_the_club_text" className="col-lg-6" >
                    <h1 id="join_the_club_header" >JOIN THE *_______* CLUB!</h1>
                    <h2 id="news_and_offers">*_____* NEWS & OFFERS DELIVERED TO YOUR INBOX</h2>
                </div>
                <div id="join_the_club_form" className="col-lg-6" >
                    <div id="club_inputs" className="row">
                        <input className="col-10 col-sm-5 custom_input" ></input>
                        <input className="col-10 col-sm-5 custom_input"></input>
                    </div>
                    <button id="club_submit">SUBMIT</button>
                </div>
            </div>
            <div id="food_sell_div" >
                <div id="food_sell_text">
                    <h1>Flavors of Mexico, Served with Passion</h1>
                    <p>Indulge in a culinary journey through Mexico's rich flavors. Our restaurant brings the heart and soul of Mexican cuisine to your plate, where each dish is a masterpiece of tradition and taste. </p>
                    <p>Experience a symphony of vibrant spices and authentic ingredients that come together to create an unforgettable dining adventure.</p>
                </div>
                <div id='taco_image_container'>
                   <img id="tacos_image" src={tacos}></img>
                </div>
                    
            </div>
        </div>
    )
}

export default Home