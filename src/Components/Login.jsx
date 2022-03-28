import React from 'react'

function Login(){

    const [formDetails, setFormDetails] = React.useState({
        email: "",
        password: ""
    })

    const handleChange = (e) => {
        const {name, value } = e.target.value;
        setFormDetails({
            ...formDetails,
            [name] : value
        })
    }

    const {email, password} = formDetails

    const handlSubmit = (e) => {
        e.preventDefault()
        console.log(formDetails)
    }

    return(
        <>
            <h1>Login Page</h1>
            <form onSubmit={handlSubmit}>
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
            <input type="submit" value="LOGIN"/> 
            </form>
        </>
    )
}

export {Login}