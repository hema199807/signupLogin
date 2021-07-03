import React from 'react';
import '../styles/signUp.css';
import axios from 'axios';
import {withRouter} from 'react-router-dom';

class Profile extends React.Component{
    constructor(){
        super();
        this.state={
            Name:'',
            Email:sessionStorage.getItem("Email"),
            age:'',
            gender:'',
            mobile_no:'',
            Dob:''
        }
       
    }
    
    handlechange=(event,state)=>{
        this.setState({[state]:event.target.value})
    }
    handleChange=(gender)=>{
        this.setState({gender:gender})
    }
    
    Navigation=()=>{
        this.props.history.push('/login');
    }
    Updateprofile=(e)=>{
        e.preventDefault();
        const {Name,Email,age,gender,mobile_no,Dob}=this.state
        if(!Name || !age || !gender || !mobile_no || !Dob){
            alert("all fields are required")
        }else{
            alert("profile updated");
        }
        this.setState({
            Name:Name,
            Email:Email,
            age:age,
            gender:gender,
            mobile_no:mobile_no,
            Dob:Dob
        })

    }
    render(){
        const {Name,age,gender,mobile_no,Dob}=this.state

        
        const Email=sessionStorage.getItem("Email");
        return(
            <React.Fragment>
              
                <div id="profile">
                    <h3 id="details-heading">Profile</h3>
                    <form id="DetailsDiv">
                        
                        <label className="sign-up-details">Name : 
                        <input type="text" required value={Name} onChange={(event)=>this.handlechange(event,'Name')}/>
                        </label>
                        <label className="sign-up-details">Email :
                        <input type="email" placeholder="ex:asdhj@1354" required value={Email} onChange={(event)=>this.handlechange(event,'Email')}/>
                        </label>
                        <label className="sign-up-details">age :
                        <input type="number" required value={age} onChange={(event)=>this.handlechange(event,'age')}/>
                        </label>
                        <label className="sign-up-details">Gender :
                        <label for="female">
                        <input id="female" type="radio" name='gender' checked={gender=='Female'} onChange={()=>this.handleChange('Female')}/>
                        Female
                        </label>
                        <label for="male">
                        <input id="male" type="radio" name='gender' checked={gender=='Male'} onChange={()=>this.handleChange('Male')}/>
                        Male
                        </label>
                        <label for="others">
                        <input id="others" type="radio" name='gender' checked={gender=='others'} onChange={()=>this.handleChange('others')}/>
                        Others
                        </label>
                        </label>
                        <label for="phone" className="sign-up-details">phone number:
                        <input type="tel" id="phone" name="phone" required value={mobile_no} onChange={(event)=>this.handlechange(event,'mobile_no')}/>
                        </label>
                        <label for="birthday" className="sign-up-details">Dob:
                        <input type="date" id="birthday" name="birthday" value={Dob} onChange={(event)=>this.handlechange(event,'Dob')}/>
                        </label>
                        <button id="logout" onClick={this.Navigation}>Login Out</button>
                        <button id="update" onClick={(event)=>this.Updateprofile(event)}>Update</button>
                    </form>              
                </div>
               
            </React.Fragment>
        )
    }
}
export default withRouter(Profile);