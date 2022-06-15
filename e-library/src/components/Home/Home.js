import './Home.css'
import bookshelf from '../../assets/bookshelf.jpeg';

function Home(){
    return(<div>
        <div className="container-fluid">
              <div className="row">
                <div className="col-4"></div>
                <div className="col-4">
                    <img className="imgAbout" src={bookshelf}/>
                </div>
                <div className="col-4"></div>
              </div>
              <div className="row">
                <div className="col-12">
                    <p>
                      Welcome <i>{sessionStorage.email}...</i><br/>
                      Happy Reading!!!
                    </p>
                </div>
              </div>   
          </div>
    </div>);
}

export default Home;