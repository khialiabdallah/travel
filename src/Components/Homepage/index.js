import React from 'react'
import Optiondiv from '../Optiondiv'
import Searchcontainer from '../Searchcontainer'

function Homepage(props) {
    return (
        <div>
            <Optiondiv options={props.options}/>
            <Searchcontainer/>
        </div>
    )
}

export default Homepage
