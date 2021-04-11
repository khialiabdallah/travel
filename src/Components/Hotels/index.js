import React from 'react'
import HotelCard from './HotelCard'
import "./hotels.css"
function Hotel() {
    return (
        <div className="containerHotels">
            <div className="contentHotels">
                <div className="trieHotels ">
                    <h3>Trouver L'hotel</h3>
                    <div className="trieselect">
                        <select>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                        <select>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                    </div>

                </div>

                <div className="hotels">
                    
                    <HotelCard></HotelCard>
                    <HotelCard></HotelCard>
                    <HotelCard></HotelCard>
                    <HotelCard></HotelCard>
                    <HotelCard></HotelCard>
                    <HotelCard></HotelCard>
                    <HotelCard></HotelCard>

                </div>

            </div>
            
        </div>
    )
}

export default Hotel
