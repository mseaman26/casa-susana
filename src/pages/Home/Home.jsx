import React, { useState, useEffect } from "react";
import { animateScroll as scroll } from 'react-scroll';
import './Home.css'
import ceviche from '../../assets/images/civiche.jpeg'
import tacos from '../../assets/images/tacos_cropped.jpeg'
import emailjs from 'emailjs-com'





const Home = function() {

    const [email, setEmail] = useState('')
    const [name, setName] = useState('')

    function isValidEmail(email) {
        const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        return emailPattern.test(email);
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(isValidEmail(email) && name){
            setEmail('')
            setName('')
            document.getElementById('name_input').value = ''
            document.getElementById('email_input').value = ''
            emailjs.send(
                'service_603mx0m',
                'template_x04vxpm',
                {
                    to_email: 'mseaman26@gmail.com',
                    message: `${name} filled out the form on the casa susana site lol. their reply email is ${email}`
                },
                'u1xtN4l27HdhYjBd0'
            )
            .then((result) => {
                console.log(result.text);
                
                if(result.text === 'OK'){
                    alert('Welcome to the Casa Susana club!! You will be hearing from us soon!')
                }
                }, (error) => {
                console.log(error.text);
                });
        }else{
            alert('Form was not properly filled out with a name and a valid email')
        }
        
    }

    useEffect(() => {
        // Scroll to the top of the page on component mount
        scroll.scrollToTop();
    }, []);

    return(
        <div id="home_page_container">
            <div id="civiche_container">
                <img id='civiche_image' src={ceviche}></img>
                <h1>Savor the taste of Mexico!</h1>
            </div>

            <div id="join_the_club">
                <div id="join_the_club_text_raw" >
                    <h1 id="join_the_club_header" >JOIN THE CASA SUSANA CLUB!</h1>
                    <h2 id="news_and_offers">CASA SUSANA NEWS & OFFERS DELIVERED TO YOUR INBOX</h2>
                </div>
                <form id="join_the_club_form_raw" onSubmit={handleSubmit}>
                    <div id="club_inputs_raw" >
                        <div className="input_container">
                            <input className="custom_input"id="name_input" onChange={(e) => {
                                setName(e.target.value)
                            }}></input>
                            <label htmlFor="name_input">Name</label>
                        </div>
                        <div className="input_container">
                            <input className="custom_input" type="email"  id='email_input' onChange={(e) => {
                                setEmail(e.target.value)
                            }}></input>
                            <label htmlFor="email_input">Email</label>
                        </div>
                    </div>
                    <button id="club_submit" onClick={handleSubmit}>SUBMIT</button>
                </form>
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