import React from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import Signup from '../Components/signUp';
import Login from '../Components/login';
import Profile from '../Components/profile';


const Router=()=>{
    return(
        <BrowserRouter>
        <Route exact path="/" component={Signup}/>
        <Route path="/login" component={Login}/>
        <Route path="/profile"component={Profile}/>
        </BrowserRouter>
    )
}
export default Router;
