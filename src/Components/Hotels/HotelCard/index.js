import React from 'react'
import {Card,Button} from "react-bootstrap"
import alger from "../../NavigationBar/logo.png";

function HotelCard() {
    return (
        <Card style={{ width: '18rem',margin:15,border:"1px solid #fff",}}>
        <Card.Img variant="top"  src={alger} style={{height:180,width:"100%",}} />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
                <Button   
               style={
                    {
                        height:40,width:150,
                         border:"  #fff 1px solid" , 
                         cursor:"pointer",
                         outline:"none",
                         margin:"5px",
                         marginTop:"15px",
                         backgroundColor:"transparent",
                    
                    }
                }
                         
                        >Go somewhere</Button>
            </Card.Body>
        </Card>
            )
}

export default HotelCard
