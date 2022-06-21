import './Services.css'
import budget_about from '../../assets/budget_about.jpeg';

function Services(){
    return(<div>
        <div className="container-fluid">
              <div className="row">
                <div className="col-12 imgAboutDiv">
                    <img className="imgAbout" src={budget_about}/>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                    <p>
                    Easily connect all your accounts. From cash and credit to loans and investments, 
                    you can see your complete financial picture in the tracker.<br/><br/>
                    <ul>
                        <li>Track your cash flow with ease<br/>We help you stay on top of your accounts, bills, and subscriptions. Get notified when your subscription costs increase and when bills are due.</li>
                        <li>Save smarter with custom budgets<br/>Start saving more today. Easily create your budget in this tracker. We’ll automatically categorize your transactions so you don’t have to.</li>
                    </ul>
                    </p>
                </div>
              </div>   
          </div>
    </div>);
}

export default Services;