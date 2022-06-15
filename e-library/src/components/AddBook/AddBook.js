import './AddBook.css';
import {Link,useNavigate} from "react-router-dom";
import {useState} from 'react';
import {numberValidataion,alphanumericFiftyValidation,alphanumericOnefiftyValidation} from '../Validations';
import axios from 'axios';

function AddBook(){

    const[getBook,setBook]=useState({
      id:'',
      bookTitle:'',
      bookDesc:'',
      author:'',
      noOfBooks:''
    })

    const[getValidation,setValidation]=useState({
      id:'',
      bookTitle:'',
      bookDesc:'',
      author:'',
      noOfBooks:''
    });

    const navigate=useNavigate();
    const onAddHandler=(event)=>{
      event.preventDefault();
      setValidation({
        ...getValidation,
        id:!numberValidataion(getBook.id)?"Required, Only numbers allowed":'',
        bookTitle:!alphanumericFiftyValidation(getBook.bookTitle)?"Required, Only alphabets and numbers allowed":'',
        bookDesc:!alphanumericOnefiftyValidation(getBook.bookDesc)?"Required, Only alphabets and numbers allowed":'',
        author:!alphanumericFiftyValidation(getBook.author)?"Required, Only alphabets and numbers allowed":'',
        noOfBooks:!numberValidataion(getBook.noOfBooks)?"Required, numbers allowed":''
      })
    if(numberValidataion(getBook.id) && alphanumericFiftyValidation(getBook.bookTitle) && alphanumericOnefiftyValidation(getBook.bookDesc) && alphanumericFiftyValidation(getBook.author) && numberValidataion(getBook.noOfBooks)){
      axios.post('http://localhost:3000/bookDetails',{
        bookTitle:getBook.bookTitle,
        bookDesc:getBook.bookDesc,
        author:getBook.author,
        noOfBooks:getBook.noOfBooks
      }).then(()=>{
        navigate('/SearchBooksAdmin');
      }).catch((error)=>{

      })

      //let bookDetails=[];
      //if(sessionStorage.getItem('bookDetails')){ 
      //  let details = JSON.parse(sessionStorage.getItem('bookDetails'));
      //  console.log(typeof details);
      //  bookDetails.push(...details);
      //  bookDetails.push({...getBook});
      //  sessionStorage.setItem("bookDetails",JSON.stringify(bookDetails));
      //}
      //else{
      //  bookDetails.push({...getBook});
      // sessionStorage.setItem("bookDetails",JSON.stringify(bookDetails));
      //}
      //navigate('/SearchBooksAdmin');
    }
    }

    const onChangeHandler=(event)=>{
      setBook({
        ...getBook,[event.target.name]:event.target.value
      })
    }

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
              <input type="text" value={getBook.bookId} onChange={onChangeHandler} className="form-control" id="id" name="id" placeholder="Book ID"/>
              {getValidation.id && <div style={{fontSize:"10px"}} className="alert alert-danger" role="alert">
              {getValidation.id}
              </div>}
            </div>
            <div className="form-group">
              <label name="bookTitle">Book Title</label>
              <input type="text" value={getBook.bookTitle} onChange={onChangeHandler} className="form-control" id="bookTitle" name="bookTitle" placeholder="Book Title"/>
              {getValidation.bookTitle && <div style={{fontSize:"10px"}} className="alert alert-danger" role="alert">
              {getValidation.bookTitle}
              </div>}
            </div>
            <div className="form-group">
              <label name="bookDesc">Book Description</label>
              <input type="text" value={getBook.bookDesc} onChange={onChangeHandler} className="form-control" id="bookDesc" name="bookDesc"  placeholder="Book Description"/>
              {getValidation.bookDesc && <div style={{fontSize:"10px"}} class="alert alert-danger" role="alert">
              {getValidation.bookDesc}
              </div>}
            </div>
            <div className="form-group">
              <label name="author">Author Name</label>
              <input type="text" value={getBook.author} onChange={onChangeHandler} className="form-control" id="author" name="author"  placeholder="Author Name"/>
              {getValidation.author && <div style={{fontSize:"10px"}} class="alert alert-danger" role="alert">
              {getValidation.author}
              </div>}
            </div>
            <div className="form-group">
              <label name="noOfBooks">Number of Books Available</label>
              <input type="text" value={getBook.noOfBooks} onChange={onChangeHandler} className="form-control" id="noOfBooks" name="noOfBooks"  placeholder="Number of books available"/>
              {getValidation.noOfBooks && <div style={{fontSize:"10px"}} class="alert alert-danger" role="alert">
              {getValidation.noOfBooks}
              </div>}
            </div>
            <div align="center">
                <button id="addBook" onClick={onAddHandler} type="submit" className="btn btn-primary">Add Book</button>
            </div>
            
          </form>
    </div>
    <div className="col-4">
          
    </div>
    </div>
    
</div>
    </div>);
}

export default AddBook;