import './Home.css'
import expense_tracking from '../../assets/expense_tracking.png';

function Home(){
    
    return(<div>
        <div className="container-fluid">
              <div className="row">
                <div className="col-4"></div>
                <div className="col-4">
                    <img className="imgAbout" src={expense_tracking}/>
                </div>
                <div className="col-4"></div>
              </div>
              <div className="row">
                <div className="col-12">
                    <p style={{color:"green"}}><b>
                      Welcome to your Expence Tracker<br/>
                      </b>
                    </p>
                    <p>
                     Personal finance management is an important part of people’s lives. However, everyone does not have the knowledge or 
                     time to manage their finances in a proper manner. And, even if a person has time and knowledge, they do not bother with 
                     tracking their expenses as they find it tedious and time-consuming. Now, you don’t have to worry about managing your expenses,
                     as you can get access to an expense tracker that will help in the active management of your finances.
                    </p>
                </div>
              </div>   
          </div>
    </div>);
}

export default Home;