import './Register.css';
import {Component, useState} from 'react';
import {emailValidation,passwordValidation,alphabetValidation} from '../Validations';
import {useNavigate} from "react-router-dom";

class Register extends Component{
  constructor(props){
    super(props);
    this.state={
      getForm:{
        firstName:'',
        lastName:'',
        email:'',
        password:''
      },
      getValidation:{
        firstName:'',
        lastName:'',
        email:'',
        password:''
      }
    }
  }

  onChangeHandler=(event)=>{
    this.setState({
      getForm:{
        ...this.state.getForm,
        [event.target.name]:event.target.value
      }
    })
  }

  onSubmitHandler=(event)=>{
    event.preventDefault();
    this.setState({
      getValidation:{
        firstName:!alphabetValidation(this.state.getForm.firstName)?"Required, Only alphabets allowed":'',
        lastName:!alphabetValidation(this.state.getForm.lastName)?"Required, Only alphabets allowed":'',
        email:!emailValidation(this.state.getForm.email)?"Please provide correct email":'',
        password:!passwordValidation(this.state.getForm.password)?"Please provide the correct password":''
      }
    })

    if(emailValidation(this.state.getForm.email) && passwordValidation(this.state.getForm.password) && alphabetValidation(this.state.getForm.firstName)&& alphabetValidation(this.state.getForm.lastName)){
      alert("Successfully registered.. Kindly Login to continue");
      sessionStorage.setItem("firstName",this.state.getForm.firstName);
      sessionStorage.setItem("lastName",this.state.getForm.lastName);
      sessionStorage.setItem("email",this.state.getForm.email);
      sessionStorage.setItem("password",this.state.getForm.password)
      document.location.href="/Login";
    }
    
  }

  render(){
    return(<div>
      <div className="container">
            <div className="row">
                <div className="col-4"></div>
                <div className="col-4 heading">
                    Sign Up
                </div>
                <div className="col-4"></div>
            </div>
            <div className="row">
              <div className="col-4">

              </div>
              <div className="col-4">
                <form id="registrationForm" action="login.html">
                    <div className="form-group">
                        <label id="firstName" className="regLabels">First Name</label>
                        <input type="text" onChange={this.onChangeHandler} className="form-control" id="firstName" name="firstName" placeholder="First Name"/>
                        {this.state.getValidation.firstName && <div style={{fontSize:"10px"}} class="alert alert-danger" role="alert">
                        {this.state.getValidation.firstName}
                        </div>}
                    </div>
                    <div className="form-group">
                        <label id="lastName" className="regLabels">Last Name</label>
                        <input type="text" onChange={this.onChangeHandler} className="form-control" id="lastName" name="lastName" placeholder="Last Name"/>
                        {this.state.getValidation.lastName && <div style={{fontSize:"10px"}} class="alert alert-danger" role="alert">
                        {this.state.getValidation.lastName}
                        </div>}
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="emailAddress" className="regLabels">Email address</label>
                      <input type="email"  onChange={this.onChangeHandler} className="form-control" id="email" name="email" aria-describedby="emailHelp" placeholder="Enter email"/>
                      <p style={{fontSize:"10px"}}><i>Your email will be the username</i></p>
                      {this.state.getValidation.email && <div style={{fontSize:"10px"}} class="alert alert-danger" role="alert">
                      {this.state.getValidation.email}
                      </div>}
                    </div>
                    <div className="form-group">
                      <label htmlFor="password1" className="regLabels">Password</label>
                      <input type="password" onChange={this.onChangeHandler} className="form-control" id="password" name="password" placeholder="Enter Password"/>
                      {this.state.getValidation.password && <div style={{fontSize:"10px"}} class="alert alert-danger" role="alert">
                      {this.state.getValidation.password}
                </div>}
                    </div>
                    <div align="center">
                      <button id="signUp" onSubmit={this.onSubmitHandler} onClick={this.onSubmitHandler} type="submit" className="btn btn-primary">Sign Up</button>
                    </div>
                    
                  </form>
            </div>
            <div className="col-4">
                  
            </div>
            </div>
            
        </div>
  </div>);
  }
}

export default Register;


