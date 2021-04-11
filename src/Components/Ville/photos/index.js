import React from 'react'
import "./photos.css"
import  VillePhoto  from "./VillePhoto";

function Photos() {
    const photos=[1,2,3]
    return (
        <div className="photoscontainer">
            {
            photos.map(e=><VillePhoto/>)    
            
            }
        
        
        </div>
    )
}

export default Photos
