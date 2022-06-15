import './FirstPage.css';
import library from '../../assets/library.jpeg';
import {useNavigate} from "react-router-dom";

function FirstPage(){

    const navigate=useNavigate();

    const onAdminClickHandler=(event)=>{
        sessionStorage.setItem("role","admin");
        navigate('/Home');
      }

    const onMemberClickHandler=(event)=>{
        sessionStorage.setItem("role","member");
        navigate('/Home');
      }  

    return(<div>
        <div className="container-fluid">
              <div className="row">
                <div className="col-12 imgAboutDiv">
                    <img className="imgAbout" src={library}/>
                </div>
              </div>
              <div>
                  <p>   </p>
              </div>
              <div className="row">
                
                <div className="col-12" style={{textAlign:"center"}}>
                    <button onClick={onAdminClickHandler} style={{width:"100px",height:"50px",color:"orange"}}>Admin</button>
                    <span><p>  </p></span>
                    <button onClick={onMemberClickHandler} style={{width:"100px",height:"50px",color:"orange"}}>Members</button>
                </div>
                
              </div>   
          </div>
    </div>)
}

export default FirstPage;