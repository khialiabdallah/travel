import React from 'react'
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
function LoginSignup() {
    return (
        <div className="login-signup">
                            <Link to="/login">Login</Link>
                            <span>  /  /  </span>
                            <Link to="/signup">Sign up</Link>
                            <span>  /  /  </span>
                            <Link to="/profile"><FaUserCircle/></Link>

        </div>
    )
}

export default LoginSignup
