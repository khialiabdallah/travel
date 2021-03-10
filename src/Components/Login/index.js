import React from 'react'
import "./Login.css"
import {FiUser} from "react-icons/fi"
import {HiOutlineMail} from "react-icons/hi"
import {RiLockPasswordLine} from "react-icons/ri"
import {FaFacebookF} from "react-icons/fa"
import {SiGmail} from "react-icons/si"
function Login() {
    return (
        <div className="loginwrapper    ">
        <div className="login">
                <h2>Sign in</h2>
                <div className="champ username">
                    <FiUser/>
                    <input placeholder="Username"></input>
                </div>
                <div  className="champ email">
                <HiOutlineMail/>
                <input placeholder="Email" ></input>
                </div>
                <div type="password" className="champ password" >
                <RiLockPasswordLine/>
                <input placeholder="Password" type="password"></input>
                </div>
                <div className="champ signbtn">
                    sign in
                </div>
                 

                <h2>Or</h2>
                <h2>Log in with :</h2>
                <div className="champ facebookLog"><FaFacebookF className="social-icons"/>  Facebook</div>
                <h4>OR</h4>
                <div className="champ googleLog"><SiGmail className="social-icons"/>  Gmail</div>

               
        </div>
        </div>
    )
}

export default Login
