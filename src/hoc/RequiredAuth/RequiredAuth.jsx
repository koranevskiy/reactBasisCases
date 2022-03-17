import {Navigate} from "react-router-dom";
import React, {useContext} from 'react';
import {AuthContext} from "../../context";

const RequiredAuth = ({children}) => {
    const {isAuth, isLoading} = useContext(AuthContext)
    if (!isAuth && !isLoading) {

        return <Navigate to='/login'/>
    }
    return children
};

export default RequiredAuth;