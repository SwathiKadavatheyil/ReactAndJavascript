import './AdminHeader.css';
import {Link, link} from "react-router-dom";

function AdminHeader(){
    return(<div>
        <nav className="navbar navbar-expand-lg" style={{backgroundColor:'rgb(60, 58, 58)'}}>
            <a className="navbar-brand" href="#"><i className="fa fa-university" aria-hidden="true"></i></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
          
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <Link className="nav-link" to="About">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="About">About Library</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="Rules">Rules & Regulations</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="PriceCard">Price Card</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="SearchBooksAdmin">Search Books</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="AddBook">Add Book</Link>
                </li>
              </ul>
              <form className="form-inline my-2 my-lg-0">
                <button className="btn my-2 my-sm-0 active" type="submit"><Link to="Register">Register Here</Link></button>
                <button className="btn my-2 my-sm-0 active" type="submit"><Link to="/">Login</Link></button>
              </form>
            </div>
          </nav>
    </div>);
}

export default AdminHeader;