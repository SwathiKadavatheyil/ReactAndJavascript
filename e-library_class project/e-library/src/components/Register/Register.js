import './Register.css';
import {useState} from 'react';
import {emailValidation,passwordValidation,alphabetValidation} from '../Validations';
import {useNavigate} from "react-router-dom";
import axios from 'axios';

function Register(){

    const navigate=useNavigate();

    const[getForm,setForm]=useState({
      firstName:'',
      lastName:'',
      email:'',
      password:'',
      role:''
    });

    const[getValidation,setValidation]=useState({
      firstName:'',
      lastName:'',
      email:'',
      password:'',
      role:''
    });

    const onChangeHandler=(event)=>{
      setForm({
        ...getForm,[event.target.name]:event.target.value
      })
    }

    const onSubmitHandler=(event)=>{
      event.preventDefault();
      setValidation({
        ...getValidation,
        firstName:!alphabetValidation(getForm.firstName)?"Required, Only alphabets allowed":'',
        lastName:!alphabetValidation(getForm.lastName)?"Required, Only alphabets allowed":'',
        email:!emailValidation(getForm.email)?"Please provide correct email":'',
        password:!passwordValidation(getForm.password)?"Please provide the correct password":'',
        role:!alphabetValidation(getForm.role)?"Required":''
      })

      if(emailValidation(getForm.email) && passwordValidation(getForm.password) && alphabetValidation(getForm.firstName)&& alphabetValidation(getForm.lastName)&&(alphabetValidation(getForm.role))){
        alert("Successfully registered.. Kindly Login to continue");
        axios.post('http://localhost:3000/elibraryusers',{
          firstName:getForm.firstName,
          lastName:getForm.lastName,
          email:getForm.email,
          password:getForm.password,
          role:getForm.role
        
       }).then(()=>{
        navigate('/Login');
       }).catch((error)=>{

       })
        // sessionStorage.setItem("firstName",getForm.firstName);
        // sessionStorage.setItem("lastName",getForm.lastName);
        // sessionStorage.setItem("email",getForm.email);
        // sessionStorage.setItem("password",getForm.password)
        // navigate('/Login');
      }
      
    }

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
                          <input type="text" value={getForm.firstName} onChange={onChangeHandler} className="form-control" id="firstName" name="firstName" placeholder="First Name"/>
                          {getValidation.firstName && <div style={{fontSize:"10px"}} className="alert alert-danger" role="alert">
                          {getValidation.firstName}
                          </div>}
                      </div>
                      <div className="form-group">
                          <label id="lastName" className="regLabels">Last Name</label>
                          <input type="text" value={getForm.lastName} onChange={onChangeHandler} className="form-control" id="lastName" name="lastName" placeholder="Last Name"/>
                          {getValidation.lastName && <div style={{fontSize:"10px"}} className="alert alert-danger" role="alert">
                          {getValidation.lastName}
                          </div>}
                      </div>
                      
                      <div className="form-group">
                        <label htmlFor="emailAddress" className="regLabels">Email address</label>
                        <input type="email" value={getForm.email} onChange={onChangeHandler} className="form-control" id="email" name="email" aria-describedby="emailHelp" placeholder="Enter email"/>
                        <p style={{fontSize:"10px"}}><i>Your email will be the username</i></p>
                        {getValidation.email && <div style={{fontSize:"10px"}} className="alert alert-danger" role="alert">
                        {getValidation.email}
                        </div>}
                      </div>
                      <div className="form-group">
                        <label htmlFor="password1" className="regLabels">Password</label>
                        <input type="password" value={getForm.password} onChange={onChangeHandler} className="form-control" id="password" name="password" placeholder="Enter Password"/>
                        {getValidation.password && <div style={{fontSize:"10px"}} className="alert alert-danger" role="alert">
                        {getValidation.password}
                      </div>}
                      <div className="form-group">
                        <label htmlFor="role" className="regLabels">Role</label><br/>
                        {/* <input type="radio" value={getForm.role} onChange={onChangeHandler} className="form-control" id="role" name="role"/> */}
                        <label htmlFor="role">Admin</label>
                        <input type="radio" id="admin" name="role" onChange={onChangeHandler} value="admin"/>
                        <label htmlFor="role">Member</label>
                        <input type="radio" id="member" name="role" onChange={onChangeHandler} value="member"/>
                        {getValidation.role && <div style={{fontSize:"10px"}} className="alert alert-danger" role="alert">
                        {getValidation.role}
                         </div>}
                      </div>
                      </div>
                      <div align="center">
                        <button id="signUp" onSubmit={onSubmitHandler} onClick={onSubmitHandler} type="submit" className="btn btn-primary">Sign Up</button>
                      </div>
                      
                    </form>
              </div>
              <div className="col-4">
                    
              </div>
              </div>
              
          </div>
    </div>);
}

export default Register;