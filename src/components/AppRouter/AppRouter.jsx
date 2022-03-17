import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import PostPage from "../Pages/Posts/PostPage";
import About from "../Pages/About/About";
import NotFound from "../Pages/NotFound/NotFound";
import PostId from "../Pages/Posts/PostId";
import LoginPage from "../Pages/Login/LoginPage";
import RequiredAuth from "../../hoc/RequiredAuth/RequiredAuth";

const AppRouter = () => {

    return (
        <Routes>
            <Route path='/posts' element={<RequiredAuth><PostPage/></RequiredAuth>}/>
            <Route path='/about' element={
                <RequiredAuth><About/></RequiredAuth>}/>
            <Route path='/posts/:id' element={<RequiredAuth><PostId/></RequiredAuth>}/>
            <Route path='/' element={<Navigate to='/posts'/>}/>
            <Route path='/login' element={<LoginPage/>}/>
            <Route path='*' element={<NotFound/>}/>
        </Routes>
    );
};

export default AppRouter;