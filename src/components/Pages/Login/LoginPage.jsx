import React, {useContext, useEffect} from 'react';
import MyInput from "../../UI/MyInput/MyInput";
import MyButton from "../../UI/Button/MyButton";
import {useNavigate} from "react-router-dom";
import {AuthContext} from "../../../context";
import {useFormik} from "formik";
import SighUpSchema from "../../../utils/sighUpSchema";

const LoginPage = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext)
    const navigate = useNavigate()
    const formik = useFormik({
        initialValues: {
            login: '',
            password: ''
        },
        validationSchema: SighUpSchema,
        onSubmit: values => {
            setIsAuth(true)
            localStorage.setItem('auth', 'true')
        }
    })
    useEffect(() => {
        if (isAuth) {
            navigate('/', {replace: true})
        }
    }, [isAuth])

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={formik.handleSubmit} style={{width: 500}}>
                <MyInput type='text' placeholder='login' name='login' value={formik.values.login} onChange={formik.handleChange}/>
                {formik.errors && formik.touched.login? <div style={{color: 'red'}}>{formik.errors.login}</div> : null}
                <MyInput type='password' placeholder='password' name='password' value={formik.values.password} onChange={formik.handleChange}/>
                {formik.errors && formik.touched.password? <div style={{color: 'red'}}>{formik.errors.password}</div> : null}

                <MyButton type='submit' disabled={formik.isValidating}>Sign in</MyButton>
            </form>
        </div>
    );
};

export default LoginPage;