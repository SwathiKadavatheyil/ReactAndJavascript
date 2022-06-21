import './Header.css';
import {Link,NavLink} from "react-router-dom";
import {useNavigate} from "react-router-dom";
import {useSelector,useDispatch} from 'react-redux';
import Users from '../../services/users';
import header_icon from '../../assets/header_icon.png';

function Header(){

  const navigate=useNavigate();
  const dispatch=useDispatch();
  const usersInfo = useSelector((state)=> state.users); 

    const onClickHandler=(event)=>{
        event.preventDefault();
        Users.logout(dispatch);
        navigate('');
    }
      return(<div>

        
        <nav className="navbar navbar-expand-lg" style={{backgroundColor:'lightgrey',marginBottom:"5px"}}>
            <img src={header_icon} style={{height:"40px", width:"50px"}}/>
            {/* <a className="navbar-brand" href="#"><i className="fa fa-university" aria-hidden="true"></i></a> */}
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
          
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <NavLink className="nav-link" to="/">Home</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="About">About</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="Services">Services</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="Contact">Contact</NavLink>
                </li>
                {usersInfo.loginStatus &&
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item">
                  <NavLink className="nav-link" to="AddExpense">Add Expense</NavLink>
                </li>
                 <li className="nav-item">
                  <NavLink className="nav-link" to="Dashboard">Dashboard</NavLink>
                </li>
                </ul>
                }
              </ul>
                  {!usersInfo.loginStatus &&
                        <form className="form-inline my-2 my-lg-0">
                        <button className="btn my-2 my-sm-0 active" type="submit"><Link to="Register">Sign Up</Link></button>
                        <button className="btn my-2 my-sm-0 active" type="submit"><Link to="Login">Login</Link></button>
                      </form>
                  }
                {usersInfo.loginStatus &&
                   <form className="form-inline my-2 my-lg-0">
                     <button className="btn my-2 my-sm-0 active" type="submit" onClick={onClickHandler} style={{color:"white"}}>Log out</button>
                   </form>
                }
                
            </div>
          </nav>
    </div>);
    
}

export default Header;