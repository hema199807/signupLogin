import React from 'react';
import '../styles/signUp.css';
import axios from 'axios';
import {withRouter} from 'react-router-dom';

class Signup extends React.Component{
    constructor(){
        super();
        this.state={
            Name:'',
            Email:'',
            password:'',
            ConfirmPassword:''
        }
       
    }
    handlechange=(event,state)=>{
        this.setState({[state]:event.target.value})
    }
    signup=(e)=>{
        e.preventDefault();
        const {Name,Email,Password,ConfirmPassword}=this.state
        const obj={
            Name:Name,
            Email:Email,
            Password:Password,
            ConfirmPassword:ConfirmPassword
        }
        if(Password && ConfirmPassword){
            if(Password !=ConfirmPassword) {
                return alert("Password and ConfirmPassword Should be same");
            }
        }
        if(!Name || !Email || !Password || !ConfirmPassword){
            alert("all fields are required")
        }
        axios({
            method:'POST',
            url:'http://localhost:300/signup',
            headers:{'Content-Type':'application/json'},
            data:obj
        })
        
        .then(response=>{
            if(response.data.message==='Account already exit, please login'){
                this.setState({
                    Name:'',
                    Email:'',
                    Password:'',
                    ConfirmPassword:''
                })
                alert(response.data.message);
            }
            
            if(response.data.message==='Account Created Sucessfully'){
                
                this.setState({
                    Name:'',
                    Email:'',
                    Password:'',
                    ConfirmPassword:''
                })
                alert(response.data.message)
                
            }    
        })
        .catch(err=>console.log(err))
    }
    Navigation=()=>{
        this.props.history.push('/login');
    }
    render(){
        const {Name,Email,Password,ConfirmPassword}=this.state
        return(
            <React.Fragment>
                <div id="user-details">
                    <h3 className="heading">Create an account</h3>
                    <form id="signUpDetailsDiv">
                        <fieldset>
                        <legend>SignUp</legend>
                        <label className="sign-up-details">Name : 
                        <input type="text" required value={Name} onChange={(event)=>this.handlechange(event,'Name')}/>
                        </label>
                        <label className="sign-up-details">Email :
                        <input type="email" placeholder="ex:asdhj@1354" required value={Email} onChange={(event)=>this.handlechange(event,'Email')}/>
                        </label>
                        <label className="sign-up-details">Password :
                        <input type="password" required value={Password} onChange={(event)=>this.handlechange(event,'Password')}/>
                        </label>
                        <label className="sign-up-details">Confirm Password :
                        <input type="password" required value={ConfirmPassword} onChange={(event)=>this.handlechange(event,'ConfirmPassword')}/>
                        </label>
                        </fieldset>
                        <button type="submit" id="signup" onClick={(e)=>this.signup(e)}>Signup</button>
                        <p id="signup-p-login">If account created then login</p>
                        <button id="signup-login" onClick={this.Navigation}>Login</button>
                    </form>              
                </div>
            </React.Fragment>
        )
    }
}
export default withRouter(Signup);