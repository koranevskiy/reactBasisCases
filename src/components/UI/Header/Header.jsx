import React, {useContext} from 'react';
import {NavLink} from "react-router-dom";
import {AuthContext} from "../../../context";
import MyButton from "../Button/MyButton";

const Header = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext)
    const exit = () => {
        setIsAuth(false)
        localStorage.removeItem('auth')
    }
    return (
        <header className='header'>
            {isAuth && <MyButton onClick={exit}>Exit</MyButton>}
            <div className="header__links">
                <NavLink to='/about' className={({isActive}) => (isActive? 'header__link-active' : '')}>About</NavLink>
                <NavLink to='/posts' className={({isActive}) => (isActive? 'header__link-active' : '')}>Posts</NavLink>
            </div>
        </header>
    );
};

export default Header;