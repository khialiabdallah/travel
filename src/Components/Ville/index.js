import React from 'react'
import Avis from './avis'
import DescriptionCard from './Description'
import Photos from './photos'
import "./ville.css"


function Ville() {
    return (
        <div className="villecontainer">
            <div className="content1" >
                    <div className="content1-description" >
                        <DescriptionCard/>
                    </div>
            </div>
            <div className="content2" >
                <ul className="content2-ul ">
                    <li>Avis</li>
                    <li>photos</li>
                </ul>

                <Photos/>
                
                
            </div>


            
        </div>
    )
}

export default Ville
