import './About.css';
import budget_about from '../../assets/budget_about.jpeg';

function About(){
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
                    A personal budget or family budget is a finance plan that allocates future personal income towards expenses, 
                    savings and debt repayment. Past spending and personal debt are considered when creating a personal budget. 
                    There are several methods and tools available for creating, using and adjusting a personal budget. 
                    The administration of such a budget requires budgeting skills.
                    </p>
                    <p> 
                        Budget tracking is the process of tracking expenses, receipts, and invoices so that a project can be 
                        completed within its allotted budget. Budget tracking can be done using budgeting and forecasting software.
                    </p>
                </div>
              </div>   
          </div>
    </div>);
}

export default About;