import React from 'react';
import '../styles/signUp.css';
import axios from 'axios';
import {withRouter} from 'react-router-dom';
import Profile from '../Components/profile'

class Login extends React.Component{
    constructor(){
        super();
        this.state={
            Email:'',
            password:'',
            isLoggedIn:false
        }
       
    }
    handlechange=(event,state)=>{
        this.setState({[state]:event.target.value})
    }
    
    NavigationToSignUp=()=>{
        this.props.history.push('/');
    }
    login=(e)=>{
        e.preventDefault();
        const {Email,Password}=this.state
        const obj={
            Email:Email,
            Password:Password
            
        }
        
        axios({
            method:"POST",
            url:'http://localhost:300/login',
            headers:{'Content-Type':'application/json'},
            data:obj
        })
        .then(response=>{
           
            this.setState({isLoggedIn:response.data.isAthunticated})
            if(Email && Password){
                if(response.data.isAthunticated==false){
                    alert(response.data.message);
                }
                else{
                    sessionStorage.setItem("Email",Email);
                    alert(response.data.message);
                    
                   this.props.history.push('/profile');
                   
                }
            }else{
                alert("all fields are required")
            }
        }).catch(err=>console.log(err))
    }
    render(){
        const {Email,Password,isLoggedIn}=this.state
        return(
            <React.Fragment>
                <div>
                    
                    <form id="loginDetailsDiv">
                        <fieldset>
                        <legend>Login</legend>
                        <label className="sign-up-details">Email :
                        <input type="email" placeholder="ex:asdhj@1354" required value={Email} onChange={(event)=>this.handlechange(event,'Email')}/>
                        </label>
                        <label className="sign-up-details">Password :
                        <input type="password" required value={Password} onChange={(event)=>this.handlechange(event,'Password')}/>
                        </label>
                        </fieldset>
                        <p id="p-login">If account is not created then signup</p>
                        <button  id="signup" onClick={this.NavigationToSignUp}>Signup</button>
                        <button id="login" onClick={(event)=>this.login(event)}>Login</button>
                        
                    </form>
                    
                           
                </div>
            </React.Fragment>
        )
    }
}
export default withRouter(Login);