import './Login.css';
import {Link,useNavigate} from "react-router-dom";
import {useState} from 'react';
import {emailValidation,passwordValidation} from '../Validations';
import bookshelf from '../../assets/bookshelf.jpeg';
import booksicon from '../../assets/booksicon.png';
import usericon from '../../assets/usericon.png';
import keyicon from '../../assets/keyicon.png';
import axios from 'axios';

function Login(){
    const navigate=useNavigate();
    const userlist=[];

    const[getForm,setForm]=useState({
      email:'',
      password:''
    });
  
    const[getValidation,setValidation]=useState({
      email:'',
      password:''
    });
  
    const onChangeHandler=(event)=>{
      setForm({
        ...getForm,[event.target.name]:event.target.value
      })
    }

    const onSubmitHandler=(event)=>{
      event.preventDefault(); 
      setValidation({
        ...getValidation,email:!emailValidation(getForm.email)?"please provide correct email":'',
        password:!passwordValidation(getForm.password)?"Please provide the correct password":''
      });
      if(emailValidation(getForm.email) && passwordValidation(getForm.password)){
        axios.get('http://localhost:3000/elibraryusers').then((response)=>{
        //userlist=response.data;
        for(var i=0;i<response.data.length;i++){
          if(response.data[i].email === getForm.email && response.data[i].password === getForm.password){
            navigate('/Home');
            break;
          }
          else{
            setValidation({
              email:'no match found',
              password:'no match found'
            });
          }
        }
        }).catch((error)=>{
        console.log(error);
        });

        // let email = sessionStorage.getItem('email');
        // let password = sessionStorage.getItem('password');
    
      }
  }

    return(<div style={{backgroundImage: 'url(' + bookshelf + ')',height:"100vh"}}>
    <div className="container">
    <div className="row">
      <br/>
      <br/>
      <br/>
    </div>
    <div className="row">
        <div className="col-4"></div>
        <div className="col-4 heading" style={{backgroundColor:"white"}}>
          <table>
            <tr>
              <td><img src={booksicon} style={{height:"100px", width:"100px"}}/></td>
              <td style={{color:"orange"}}>LIBRARY Management System</td>
            </tr>
          </table>
        </div>
        <div className="col-4"></div>
    </div>
    <div className="row">
      <div className="col-4">

      </div>
      <div className="col-4" style={{backgroundColor:"white"}}>
        <form id="registrationForm"> 
            <div className="form-group">
              <label htmlFor="userName">User Name</label>
              <input type="email" onChange={onChangeHandler} value={getForm.email} className="form-control" id="email" name="email" aria-describedby="emailHelp" style={{backgroundImage: 'url(' + usericon + ')',backgroundRepeat:"no-repeat",backgroundSize:"40px",paddingLeft:"40px"}}/>
              {getValidation.email && <div class="alert alert-danger" role="alert">
                        {getValidation.email}
                        </div>}
            </div>
            <div className="form-group">
              <label htmlFor="password1">Password</label>
              <input type="password" onChange={onChangeHandler} value={getForm.password} className="form-control" id="password" name="password" style={{backgroundImage: 'url(' + keyicon + ')',backgroundRepeat:"no-repeat",backgroundSize:"34px",paddingLeft:"40px"}}/>
              {getValidation.password && <div class="alert alert-danger" role="alert">
                        {getValidation.password}
                  </div>}
            </div>
            <div align="center">
              <button id="signUp" onClick={onSubmitHandler} type="submit" className="btn btn-primary">Login</button>
              <button id="register" type="submit" className="btn btn-primary"><Link to="/Register">New User? Register Here</Link></button>
              <br/>
              <br/>
            </div>
            
          </form>
    </div>
    <div className="col-4">
          
    </div>
    </div>
    
</div>
</div>);
}

export default Login;