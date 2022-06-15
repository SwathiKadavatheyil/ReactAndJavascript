import './AddBook.css';
import {Link,useNavigate} from "react-router-dom";
import {Component, useState} from 'react';
import {numberValidataion,alphanumericFiftyValidation,alphanumericOnefiftyValidation} from '../Validations';
import axios from 'axios';

class AddBook extends Component{
  constructor(props){
    super(props);
    this.state={
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

  onAddHandler=(event)=>{
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
    axios.post('http://localhost:3000/bookDetails',{
      bookTitle:this.state.getBook.bookTitle,
      bookDesc:this.state.getBook.bookDesc,
      author:this.state.getBook.author,
      noOfBooks:this.state.getBook.noOfBooks
    }).then(()=>{
      document.location.href="/SearchBooksAdmin"
    }).catch((error)=>{

    })
  }
  }

  onChangeHandler=(event)=>{
    this.setState({
      getBook:{
        ...this.state.getBook,[event.target.name]:event.target.value
      }
      
    })
  }

  render(){
    return(<div>
      <div className="container">
  <div className="row">
      <div className="col-4"></div>
      <div className="col-4 heading">
          Add Book
      </div>
      <div className="col-4"></div>
  </div>
  <div className="row">
    <div className="col-4">

    </div>
    <div className="col-4">
      <form id="addBook"> 
          <div className="form-group">
            <label name="bookId">Book ID</label>
            <input type="text" value={this.state.getBook.bookId} onChange={this.onChangeHandler} className="form-control" id="id" name="id" placeholder="Book ID"/>
            {this.state.getValidation.id && <div style={{fontSize:"10px"}} className="alert alert-danger" role="alert">
            {this.state.getValidation.id}
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
            {this.state.getValidation.bookDesc && <div style={{fontSize:"10px"}} class="alert alert-danger" role="alert">
            {this.state.getValidation.bookDesc}
            </div>}
          </div>
          <div className="form-group">
            <label name="author">Author Name</label>
            <input type="text" value={this.state.getBook.author} onChange={this.onChangeHandler} className="form-control" id="author" name="author"  placeholder="Author Name"/>
            {this.state.getValidation.author && <div style={{fontSize:"10px"}} class="alert alert-danger" role="alert">
            {this.state.getValidation.author}
            </div>}
          </div>
          <div className="form-group">
            <label name="noOfBooks">Number of Books Available</label>
            <input type="text" value={this.state.getBook.noOfBooks} onChange={this.onChangeHandler} className="form-control" id="noOfBooks" name="noOfBooks"  placeholder="Number of books available"/>
            {this.state.getValidation.noOfBooks && <div style={{fontSize:"10px"}} class="alert alert-danger" role="alert">
            {this.state.getValidation.noOfBooks}
            </div>}
          </div>
          <div align="center">
              <button id="addBook" onClick={this.onAddHandler} type="submit" className="btn btn-primary">Add Book</button>
          </div>
          
        </form>
  </div>
  <div className="col-4">
        
  </div>
  </div>
  
</div>
  </div>);
  }
}

export default AddBook;


