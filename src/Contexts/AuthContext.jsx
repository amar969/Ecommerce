import React from "react";


const AuthContext = React.AuthContext();

const AuthContextProvider = ({childern}) => {
    const isAuth = true

    return (
        <>
            <AuthContextProvider value={isAuth}>{childern} </AuthContextProvider>
        </>
    )
}

export {AuthContextProvider}