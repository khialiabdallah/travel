import React from 'react'
import "./Optiondiv.css"
import Optioncard from "../Optioncard"
function Optiondiv(props) {
    return (
        
     
        <div className="optionCardContainer">
                <div className="optionCardWrapper">
                    {
                    props.options.map((e,i)=><Optioncard key={e.key} name={e.option}/>)
                    }
                </div>
        </div>
        
    )
}

export default Optiondiv
