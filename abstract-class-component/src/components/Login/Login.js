import './Login.css';
import {Link} from "react-router-dom";
import {Component} from 'react';
import {emailValidation,passwordValidation} from '../Validations';
import bookshelf from '../../assets/bookshelf.jpeg';
import booksicon from '../../assets/booksicon.png';
import usericon from '../../assets/usericon.png';
import keyicon from '../../assets/keyicon.png';

class Login extends Component{
  constructor(props){
    super(props);
    this.state={
      getForm:{
        email:'',
        password:''
      },
      getValidation:{
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
                    email:!emailValidation(this.state.getForm.email)?"please provide correct email":'',
                    password:!passwordValidation(this.state.getForm.password)?"Please provide the correct password":''
                  }
                })
                
                if(emailValidation(this.state.getForm.email) && passwordValidation(this.state.getForm.password)){
                  
                  let email = sessionStorage.getItem('email');
                  let password = sessionStorage.getItem('password');
                  if(email === this.state.getForm.email && password === this.state.getForm.password){
                    document.location.href="/SearchBooksAdmin";
                  }
                  else{
                    this.setState({
                      getValidation:{
                        email:'no match found',
                        password:'no match found'
                      }
                    })
                  }
              
                }
            }

  render(){
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
               <tbody>
               <tr>
                  <td><img src={booksicon} style={{height:"100px", width:"100px"}}/></td>
                  <td style={{color:"orange"}}>LIBRARY Management System</td>
                </tr>
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
                  <label htmlFor="userName">User Name</label>
                  <input type="email" onChange={this.onChangeHandler} className="form-control" id="email" name="email" aria-describedby="emailHelp" style={{backgroundImage: 'url(' + usericon + ')',backgroundRepeat:"no-repeat",backgroundSize:"40px",paddingLeft:"40px"}}/>
                  {this.state.getValidation.email && <div class="alert alert-danger" role="alert">
                            {this.state.getValidation.email}
                            </div>}
                </div>
                <div className="form-group">
                  <label htmlFor="password1">Password</label>
                  <input type="password" onChange={this.onChangeHandler} className="form-control" id="password" name="password" style={{backgroundImage: 'url(' + keyicon + ')',backgroundRepeat:"no-repeat",backgroundSize:"34px",paddingLeft:"40px"}}/>
                  {this.state.getValidation.password && <div class="alert alert-danger" role="alert">
                            {this.state.getValidation.password}
                      </div>}
                </div>
                 <div align="center">
                   <button id="signUp" onClick={this.onSubmitHandler} type="submit" className="btn btn-primary">Login</button>
                   <button id="register" type="submit" className="btn btn-primary"><Link to="Register">New User? Register Here</Link></button>
                  <br/>
                  <br/>
                </div>
                
              </form>
        </div>
        <div className="col-4">
              
        </div>
        </div>
        
     </div>
     </div>)
  }
}
export default Login;


