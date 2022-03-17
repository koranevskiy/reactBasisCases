import React, {useEffect} from 'react';
import {useNavigate} from 'react-router-dom'
const NotFound = () => {
    const navigate = useNavigate()
    useEffect(() => {
        setTimeout(() => navigate('/posts'), 4000)
    }, [])
    return (
        <h1>
            Not found page, you will be redirected after 4 second...
        </h1>
    );
};

export default NotFound;