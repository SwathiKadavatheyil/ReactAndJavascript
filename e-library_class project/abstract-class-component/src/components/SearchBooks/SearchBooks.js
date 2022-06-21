import './SearchBooks.css';

function SearchBooks(){
    return(<div>
        <div className="container-fluid">
              <div className="row">
                  <div className="col-12 heading">
                      Search Book
                  </div>
              </div>
              <div className="row">
                <div className="col-3">
                  <form id="searchBook"> 
                      <div className="form-group">
                        <label htmlFor="bookTitle">Book Title</label>
                        <input type="text" className="form-control" id="bookTitle"/>
                      </div>
                      
                      <button id="search" type="submit" className="btn btn-primary">Search</button>
                      
                    </form>
              </div>
              <div className="col-9"></div>
              </div>

              <div className="row">
                  <div className="col-12">
                    <table className="table">
                        <thead>
                          <tr>
                            <th scope="col">Book ID</th>
                            <th scope="col">Book Name</th>
                            <th scope="col">Book Description</th>
                            <th scope="col">Author</th>
                            <th scope="col">Number of books available</th>
                            <th scope="col">Purchase</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row">123456</th>
                            <td>Roller Girl</td>
                            <td>Children's Literature</td>
                            <td>Victoria James</td>
                            <td>2</td>
                            <td><a className="search_a" href="#">Purchase</a></td>
                            
                          </tr>
                          
                          <tr>
                            <th scope="row">123456</th>
                            <td>Roller Girl</td>
                            <td>Children's Literature</td>
                            <td>Victoria James</td>
                            <td>2</td>
                            <td><a className="search_a" href="#">Purchase</a></td>
                            
                          </tr>

                          <tr>
                            <th scope="row">123456</th>
                            <td>Roller Girl</td>
                            <td>Children's Literature</td>
                            <td>Victoria James</td>
                            <td>2</td>
                            <td><a className="search_a" href="#">Purchase</a></td>
                            
                          </tr>

                          <tr>
                            <th scope="row">123456</th>
                            <td>Roller Girl</td>
                            <td>Children's Literature</td>
                            <td>Victoria James</td>
                            <td>2</td>
                            <td><a className="search_a" href="#">Purchase</a></td>
                            
                          </tr>

                          <tr>
                            <th scope="row">123456</th>
                            <td>Roller Girl</td>
                            <td>Children's Literature</td>
                            <td>Victoria James</td>
                            <td>2</td>
                            <td><a className="search_a" href="#">Purchase</a></td>
                            
                          </tr>
                        </tbody>
                      </table>
                  </div>
              </div>
              
          </div>

          
    </div>);
}

export default SearchBooks;