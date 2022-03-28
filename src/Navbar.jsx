import React from "react";
import {Link} from "react-router-dom";

function Navbar(){
    return(
        <>
            <Link to="/">Home</Link>
            <Link to="/Register">Register</Link>
            <Link to="/Login">Login</Link>
            <Link to="/Products">Product</Link>
        </>
    )
}

export {Navbar}
