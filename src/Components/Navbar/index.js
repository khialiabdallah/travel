import React from 'react'
import "./Navbar.css"
import logo from '../../logo.svg';
import {AiOutlinePlusCircle} from "react-icons/ai"
import {FaRegHeart} from "react-icons/fa"
import { Link, Router  } from 'react-router-dom';


function Navbar() {
    return (
        <div className="navbar">
        

            <div className="navWrapper">
         
                    <div className="logo">
                       <a href="/"> <img src={logo} height="60px" alt="logonav"/> </a>
                       <a href="/"> Travel </a>
                    </div>
                    <div className="options">
                        <div className="navBtn"><AiOutlinePlusCircle /> <span className="nav-option">Post</span></div>
                        <div className="navBtn" to="/Login"><FaRegHeart/><span className="nav-option">Voyage</span></div>
                        
                        <a className=" loginBtn" href="../Login" >Connexion</a>

                    </div>
    

            </div>

        
        </div>
    )
}

export default Navbar
