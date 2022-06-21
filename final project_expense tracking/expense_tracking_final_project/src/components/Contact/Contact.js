import './Contact.css';
import budget_about from '../../assets/budget_about.jpeg';
import chat_icon from '../../assets/chat_icon.jpeg';
import call_icon from '../../assets/call_icon.jpeg';
import form_icon from '../../assets/form_icon.png'

function Contact(){
    return(
        <div>
            <div className="row">
                <div className="col-12 imgAboutDiv">
                    <img className="imgAbout" src={budget_about}/>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                   <h2>How can we help you today?</h2>
                </div>
              </div>  
              <div className="row">
                  <div className="col-4">
                      <div id="con">
                      <h4>Chat online with us</h4>
                      <p>Chat online with the team, available Monday through Friday from 9AM to 4:30PM</p>
                      <img className="con_icon" src={chat_icon}/>
                      </div>
                    </div>
                  <div className="col-4">
                      <div id="con">
                        <h4>Call our sales team</h4>
                        <p>Call our team, available Monday through Friday from 9AM to 4:30PM</p>
                        <img className="con_icon" src={call_icon}/>
                      </div>
                  </div>
                  <div className="col-4">
                      <div id="con">
                      <h4>Request a call back</h4>
                      <p>Fill out the contact form and our representative will contact you</p>
                      <img className="con_icon" src={form_icon}/>
                      </div>
                  </div>
              </div> 
        </div>
    )
}

export default Contact;