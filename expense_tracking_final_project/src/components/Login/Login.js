import './Login.css';
import {Link,useNavigate} from "react-router-dom";
import {useState} from 'react';
import {emailValidation,passwordValidation} from '../Validations';
import expense_login from '../../assets/expense_login.jpeg';
import email_icon from '../../assets/email_icon.png';
import lock_icon from '../../assets/lock_icon.png';
import axios from 'axios';
import {useDispatch} from 'react-redux';
import Users from '../../services/users';

function Login(){
    const navigate=useNavigate();

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

    const dispatch=useDispatch();

    const onSubmitHandler=(event)=>{
      event.preventDefault(); 
      
      setValidation({
        ...getValidation,email:!emailValidation(getForm.email)?"please provide correct email":'',
        password:!passwordValidation(getForm.password)?"Please provide the correct password":''
      });
      if(emailValidation(getForm.email) && passwordValidation(getForm.password)){
        
        axios.get('http://localhost:3000/users').then((response)=>{
        for(var i=0;i<response.data.length;i++){
          if(response.data[i].email === getForm.email && response.data[i].password === getForm.password){
            Users.loadUsers(dispatch,getForm.email);
            navigate('/');
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
    
      }
  }

    return(<div>
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
            <tbody>
            <tr>
              <td><img src={expense_login} style={{height:"70px", width:"100px"}}/></td>
              <td style={{color:"black",paddingLeft:"50px",align:"center"}}>Log in</td>
            </tr>
            <tr><br/></tr>
            </tbody>
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
              {/* <label htmlFor="userName">Email</label> */}
              <input type="email" onChange={onChangeHandler} value={getForm.email} className="form-control" id="email" name="email" aria-describedby="emailHelp" placeholder="Email" style={{backgroundImage: 'url(' + email_icon + ')',backgroundRepeat:"no-repeat",backgroundSize:"25px",paddingLeft:"40px",backgroundPositionX:"5px",backgroundPositionY:"6px"}}/>
              {getValidation.email && <div class="alert alert-danger" role="alert">
                        {getValidation.email}
                        </div>}
            </div>
            <div className="form-group">
              {/* <label htmlFor="password1">Password</label> */}
              <input type="password" onChange={onChangeHandler} value={getForm.password} className="form-control" id="password" name="password" placeholder="Password" style={{backgroundImage: 'url(' + lock_icon + ')',backgroundRepeat:"no-repeat",backgroundSize:"30px",paddingLeft:"40px"}}/>
              {getValidation.password && <div class="alert alert-danger" role="alert">
                        {getValidation.password}
                  </div>}
            </div>
            <div align="center">
              <button id="signUp" onClick={onSubmitHandler} type="submit" className="btn btn-primary">SIGN IN</button>
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