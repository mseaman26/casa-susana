import React from "react";
import './Home.css'
import ceviche from '../../assets/images/civiche.jpeg'

const Home = function() {
    return(
        <div id="home_page_container">
            <img id='civiche_image' src={ceviche}></img>
            <div id="join_the_club">

            </div>
        </div>
    )
}

export default Home