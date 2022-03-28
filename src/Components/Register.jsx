import React from 'react'
import {useNavigate} from "react-router-dom";

function Register(){

    const [formDetails, setFormDetails] = React.useState({
        name: "",
        email: "",
        password: "",
        phone: ""
    })

    const handleChange = (e) => {
        const {name, value } = e.target.value;
        setFormDetails({
            ...formDetails,
            [name] : value,
        })
    }

    const {name, email, password, phone} = formDetails

    const handlSubmit = (e) => {
        e.preventDefault()
        console.log(formDetails)
    }


    const navigate = useNavigate();

    return(
        <>
            <h1>Register</h1>
            <form onSubmit={handlSubmit}>
            <input 
                name="name"
                type="text"
                placeholder='name'
                value={name}
                onChange={handleChange}
            />

            <input 
                name="email"
                type="text"
                placeholder='email'
                value={email}
                onChange={handleChange}
            />
            <br /> 
            <input 
                name="password"
                type="text"
                placeholder='Password'
                value={password}
                onChange={handleChange}
            />
            
            <input 
                name="phone"
                type="number"
                placeholder='Enter your number'
                value={password}
                onChange={handleChange}
            />

            <input type="submit" value="Register"/> 
            </form>
        </>
    )
}

export {Register}