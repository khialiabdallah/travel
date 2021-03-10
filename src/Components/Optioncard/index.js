import logo  from "../../logo.svg"
import React from 'react'
import "./Optioncard.css"
function Optioncard(props) {
    return (
        <div className="optionCard">
            <h4>{props.name}</h4>
            <img src={logo} height="40px" alt="logooption"/>
        </div>
    )
}

export default Optioncard
