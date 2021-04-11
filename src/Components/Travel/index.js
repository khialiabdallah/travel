import React from 'react'
import "./Travel.css"

function Travel() {
    return (
     
            
         <div className="container center">                
                <div className="content">
                    <span id="welcome">Let us take u away  </span>
                    <div className="searchPanel"> 
                        
                        <div className="sp2 ">
                            <input type="text"  placeholder="PLACE" className="sp2input"/>
                            <select  placeholder="Continent" className="sp2select">
                                <option>ALGERIA</option>
                                <option>Tunisia</option>
                                <option>Maroco</option>

                            </select>
                            <div className="search center">search</div>
                            

                        </div>
                    </div>
                </div>    

         
           
            
        </div>   
 
    )
}


export default Travel;
