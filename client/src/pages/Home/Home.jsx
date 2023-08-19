import React from "react";
import './Home.css'
import ceviche from '../../assets/images/civiche.jpeg'

const Home = function() {
    return(
        <div id="home_page_container">
            <img id='civiche_image' src={ceviche}></img>
            <div id="join_the_club" className="row">
                <div id="join_the_club_text" className="col-lg-6">
                    <h1 id="join_the_club_header" >JOIN THE *_______* CLUB!</h1>
                    <h2 id="news_and_offers">*_____* NEWS & OFFERS DELIVERED TO YOUR INBOX</h2>
                </div>
                <div id="join_the_club_form" className="col-lg-6">
                    <div id="club_inputs">
                        <input></input>
                        <input></input>
                    </div>
                    
                    <button id="club_submit">SUBMIT</button>
                </div>
            </div>
        </div>
    )
}

export default Home