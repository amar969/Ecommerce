import React from 'react'
import {useParams} from "react-router-dom";


function Products(){

    const {id} = useParams();
    console.log(id);

    return(
        <>
            <h1>Product id: {id}</h1>
        </>
    )
}

export {Products}