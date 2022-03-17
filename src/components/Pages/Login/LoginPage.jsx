import React, {useContext, useEffect} from 'react';
import MyInput from "../../UI/MyInput/MyInput";
import MyButton from "../../UI/Button/MyButton";
import {useNavigate} from "react-router-dom";
import {AuthContext} from "../../../context";

const LoginPage = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext)
    const navigate = useNavigate()
    useEffect(() => {
        if (isAuth) {
            navigate('/', {replace: true})
        }
    }, [isAuth])

    return (
        <div>
            <h1>Login</h1>
            <form>
                <MyInput type='text' placeholder='login'/>
                <MyInput type='password' placeholder='password'/>
                <MyButton onClick={(event) => {
                    event.preventDefault()
                    setIsAuth(true)
                    localStorage.setItem('auth', 'true')
                }} type='button'>Sign in</MyButton>
            </form>
        </div>
    );
};

export default LoginPage;