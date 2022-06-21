import './SearchBooksAdmin.css';
import {Link} from 'react-router-dom';
import { Component, useEffect,useState } from 'react';
import {numberValidataion,alphanumericFiftyValidation,alphanumericOnefiftyValidation} from '../Validations';
import axios from 'axios';

class SearchBooksAdmin extends Component{

  constructor(props){
    super(props);
    this.state={
      list:[],
      index:-1,
      search:'',
      getBook:{
        id:'',
        bookTitle:'',
        bookDesc:'',
        author:'',
        noOfBooks:''
      },
      getValidation:{
        id:'',
        bookTitle:'',
        bookDesc:'',
        author:'',
        noOfBooks:''
      }
    }
  }

  componentDidMount(){
    axios.get('http://localhost:3000/bookDetails').then((response)=>{
      console.log(response);
      this.setState({
        list:response.data
      })
    }).catch((error)=>{
      console.log(error);
    });
  }

  onDeleteHandler=(index)=>{
    let bookDetails = [...this.state.list];
    let id=String(bookDetails[index].id);
    axios.delete('http://localhost:3000/bookDetails/'+id).then(()=>{
      bookDetails.splice(index,1);
      this.setState({
        list:bookDetails
      })
    }).catch(()=>{

    });
  }

  onChangeSearchHandler=(event)=>{
    this.setState({
      search:event.target.value
    })
  }

  searchFilter=(event)=>{
    event.preventDefault();
    let details = this.state.list.filter((obj)=>{
      return obj.bookTitle.toUpperCase() === this.state.search.toUpperCase() ; 
    })
    this.setState({list:details})
  }

  resetFilter=(event)=>{
    event.preventDefault();
    this.setState({search:''})
    axios.get('http://localhost:3000/bookDetails').then((response)=>{
      console.log(response);
      this.setState({
        list:response.data
      })
    }).catch((error)=>{
      console.log(error);
    });
}

onEditHandler=(index)=>{
  this.setState({
    getBook:{
      id:this.state.list[index].id,
      bookTitle:this.state.list[index].bookTitle,
      bookDesc:this.state.list[index].bookDesc,
      author:this.state.list[index].author,
      noOfBooks:this.state.list[index].noOfBooks}
  })
  this.setState({index:index});
 }

 onChangeHandler=(event)=>{
  this.setState({
    getBook:{...this.state.getBook,
      [event.target.name]:event.target.value}
  })
}

onEditSubmitHandler=(event)=>{
  event.preventDefault();
  this.setState({
    getValidation:{
      ...this.state.getValidation,
      id:!numberValidataion(this.state.getBook.id)?"Required, Only numbers allowed":'',
      bookTitle:!alphanumericFiftyValidation(this.state.getBook.bookTitle)?"Required, Only alphabets and numbers allowed":'',
      bookDesc:!alphanumericOnefiftyValidation(this.state.getBook.bookDesc)?"Required, Only alphabets and numbers allowed":'',
      author:!alphanumericFiftyValidation(this.state.getBook.author)?"Required, Only alphabets and numbers allowed":'',
      noOfBooks:!numberValidataion(this.state.getBook.noOfBooks)?"Required, numbers allowed":''
    }
  })
   
  if(numberValidataion(this.state.getBook.id) && alphanumericFiftyValidation(this.state.getBook.bookTitle) && alphanumericOnefiftyValidation(this.state.getBook.bookDesc) && alphanumericFiftyValidation(this.state.getBook.author) && numberValidataion(this.state.getBook.noOfBooks)){
    let bookDetails =[...this.state.list];
    let id=String(bookDetails[this.state.index].id);
    axios.patch('http://localhost:3000/bookDetails/'+id,{
      bookTitle:this.state.getBook.bookTitle,
      bookDesc:this.state.getBook.bookDesc,
      author:this.state.getBook.author,
      noOfBooks:this.state.getBook.noOfBooks
    }).then(()=>{
      this.setState({list:bookDetails});
      bookDetails[this.state.index].id = this.state.getBook.id;
      bookDetails[this.state.index].bookTitle=this.state.getBook.bookTitle;
      bookDetails[this.state.index].bookDesc = this.state.getBook.bookDesc;
      bookDetails[this.state.index].author = this.state.getBook.author;
      bookDetails[this.state.index].noOfBooks=this.state.getBook.noOfBooks
    }).catch((error)=>{

    });
  }
}

render(){
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
                    <input type="text" value={this.state.search} onChange={this.onChangeSearchHandler} className="form-control" id="bookTitle"/>
                  </div>
                  
                  <button id="search" onClick={this.searchFilter} type="submit" className="btn btn-primary">Search</button>
                  <button id="reset" onClick={this.resetFilter} className="btn btn-primary">Reset</button>

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
                        <th scope="col">Edit</th>
                        <th scope="col">Delete</th>
                      </tr>
                    </thead>
                    <tbody>
                    {this.state.list.map((obj,index)=>{
                       return(<tr key={index}>
                        
                        <td>{obj.id}</td>
                        <td>{obj.bookTitle}</td>
                        <td>{obj.bookDesc}</td>
                        <td>{obj.author}</td>
                        <td>{obj.noOfBooks}</td>
                        <td><i  data-toggle="modal" onClick={()=>this.onEditHandler(index)} data-target="#edit" className="fa fa-pencil-square-o" aria-hidden="true"></i></td>
                        <td><i className="fa fa-trash" onClick={()=>this.onDeleteHandler(index)} aria-hidden="true"></i></td>
                      </tr>

                       )
                    })

                    }
                    </tbody>
                  </table>
              </div>
          </div>
          
      </div>

      
<div className="modal fade" id="edit" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div className="modal-dialog" role="document">
  <div className="modal-content">
    <div className="modal-header">
      <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
      <button type="button" className="close" data-dismiss="modal" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div className="modal-body">
    <form id="addBook"> 
        <div className="form-group">
          <label name="bookId">Book ID</label>
          <input type="text" value={this.state.getBook.bookId} onChange={this.onChangeHandler} className="form-control" id="bookId" name="bookId" placeholder="Book ID"/>
          {this.state.getValidation.bookId && <div style={{fontSize:"10px"}} class="alert alert-danger" role="alert">
          {this.state.getValidation.bookId}
          </div>}
        </div>
        <div className="form-group">
          <label name="bookTitle">Book Title</label>
          <input type="text" value={this.state.getBook.bookTitle} onChange={this.onChangeHandler} className="form-control" id="bookTitle" name="bookTitle" placeholder="Book Title"/>
          {this.state.getValidation.bookTitle && <div style={{fontSize:"10px"}} className="alert alert-danger" role="alert">
          {this.state.getValidation.bookTitle}
          </div>}
        </div>
        <div className="form-group">
          <label name="bookDesc">Book Description</label>
          <input type="text" value={this.state.getBook.bookDesc} onChange={this.onChangeHandler} className="form-control" id="bookDesc" name="bookDesc"  placeholder="Book Description"/>
          {this.state.getValidation.bookDesc && <div style={{fontSize:"10px"}} className="alert alert-danger" role="alert">
          {this.state.getValidation.bookDesc}
          </div>}
        </div>
        <div className="form-group">
          <label name="author">Author Name</label>
          <input type="text" value={this.state.getBook.author} onChange={this.onChangeHandler} className="form-control" id="author" name="author"  placeholder="Author Name"/>
          {this.state.getValidation.author && <div style={{fontSize:"10px"}} className="alert alert-danger" role="alert">
          {this.state.getValidation.author}
          </div>}
        </div>
        <div className="form-group">
          <label name="noOfBooks">Number of Books Available</label>
          <input type="text" value={this.state.getBook.noOfBooks} onChange={this.onChangeHandler} className="form-control" id="noOfBooks" name="noOfBooks"  placeholder="Number of books available"/>
          {this.state.getValidation.noOfBooks && <div style={{fontSize:"10px"}} className="alert alert-danger" role="alert">
          {this.state.getValidation.noOfBooks}
          </div>}
        </div>
        </form>
    </div>
    <div className="modal-footer">
      <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
      <button type="button" data-dismiss="modal" onClick={this.onEditSubmitHandler} className="btn btn-primary">Save changes</button>
    </div>
  </div>
</div>
</div>
</div>)
}

}

export default SearchBooksAdmin;


