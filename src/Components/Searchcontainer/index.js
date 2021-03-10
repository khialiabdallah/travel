import React from 'react'
import "./Searchcontainer.css"
import  traveller  from '../../Travel_mode.svg';


function Searchcontainer() {
    return (
        <div className="SearchinputContainer">

                    <div className="input-button" >
                        <input className="input-destination" placeholder="Search For your destination"/>
                        <div className="btnsearch">Search</div>
                    </div>
                    <div>
                        <img src={traveller} height="380px" alt="traveller-girl"></img>
                    </div>
              
            </div>
    )
}

export default Searchcontainer
