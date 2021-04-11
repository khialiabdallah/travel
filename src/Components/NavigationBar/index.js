import React, { useState } from 'react'
import "./NavigationBar.css"
import { FaFacebook,FaInstagram,FaTumblr,FaTwitter,FaYoutube } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { Route,Link } from "react-router-dom";
import alger from "./logo.png";
import LoginSignup from './LoginSignup';
function NavigationBar() {

    


    return (
        <div className="navbar">

            <div className="nav1">
                <div className="nav1-1">
                    <div className="iconsContainer"> 
                            <a href="/"><FaFacebook/></a>
                            <a href="/"><FaInstagram/></a>
                            <a href="/"><FaTumblr/></a> 
                            <Link to="/ville"><FaTwitter/></Link> 
                            <a href="/"><FaYoutube/></a> 
                    </div>
                </div>
                <img className="starwarsimage" src={alger}/>
                <div className="nav1-3">
                    <div className="input-icon"> 
                        <input className="searchBtn" placeholder="search for something..."/>
                        <FiSearch className="fisearch"/>
                    </div>
                   
                    <LoginSignup />
                   

                </div>
            </div>
            <div className="nav2">
                <Route>
                    <ul className="appbar">
                        <li><Link to="/travel">Travel</Link></li>
                        <li><Link to="/hotels">Hotels</Link></li>
                        <li><Link to="/restaurants">Restaurants</Link></li>
                        <li><Link to="/weather">Weather</Link></li>
                        <li><Link to="/chat">Chatapp</Link></li>
                        
                    </ul>
                </Route>
            </div>
            
            
        </div>
    )
}

export default NavigationBar
