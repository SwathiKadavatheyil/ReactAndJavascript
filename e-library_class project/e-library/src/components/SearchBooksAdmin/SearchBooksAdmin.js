import './SearchBooksAdmin.css';
import {Link} from 'react-router-dom';
import { useEffect,useState } from 'react';
import {numberValidataion,alphanumericFiftyValidation,alphanumericOnefiftyValidation} from '../Validations';
import axios from 'axios';

function SearchBooksAdmin(){

  const[getList,setList] =  useState([]);
  const[getIndex,setIndex]=useState(-1);
  const[getSearch,setSearch]=useState('');

  const[getBook,setBook]=useState({
    id:'',
    bookTitle:'',
    bookDesc:'',
    author:'',
    noOfBooks:''
  });

  const[getValidation,setValidation]=useState({
    id:'',
    bookTitle:'',
    bookDesc:'',
    author:'',
    noOfBooks:''
  });

  useEffect(()=>{
    axios.get('http://localhost:3000/bookDetails').then((response)=>{
      console.log(response);
      setList(response.data)
    }).catch((error)=>{
      console.log(error);
    });
    
         //if(JSON.parse(sessionStorage.getItem('bookDetails')) && JSON.parse(sessionStorage.getItem('bookDetails')).length>0){
           // setList(JSON.parse(sessionStorage.getItem('bookDetails')))
         //}
  },[])

  const onDeleteHandler=(index)=>{
    let bookDetails = [...getList];
    let id=String(bookDetails[index].id);
    axios.delete('http://localhost:3000/bookDetails/'+id).then(()=>{
      bookDetails.splice(index,1);
      setList(bookDetails);
    }).catch(()=>{

    });
    
    //sessionStorage.setItem('bookDetails',JSON.stringify(bookDetails));
  }

  const onChangeSearchHandler=(event)=>{
    setSearch(event.target.value);
    axios.get('http://localhost:3000/bookDetails').then((response)=>{
    console.log(response);
    setList(response.data)
    }).catch((error)=>{
    console.log(error);
    });
  }

  const searchFilter=(event)=>{
    event.preventDefault();
    
    let details = getList.filter((obj)=>{
      return obj.bookTitle.toUpperCase().includes(getSearch.toUpperCase());
      //return obj.bookTitle.toUpperCase() === getSearch.toUpperCase() ; 
    })
    setList(details);
  }

  const resetFilter=(event)=>{
    event.preventDefault();
    setSearch('');
    axios.get('http://localhost:3000/bookDetails').then((response)=>{
    console.log(response);
    setList(response.data)
    }).catch((error)=>{
    console.log(error);
    });
  }

  const onEditHandler=(index)=>{
    setBook({
      id:getList[index].id,
      bookTitle:getList[index].bookTitle,
      bookDesc:getList[index].bookDesc,
      author:getList[index].author,
      noOfBooks:getList[index].noOfBooks
    })
    setIndex(index);
   }

   const onChangeHandler=(event)=>{
    setBook({
      ...getBook,[event.target.name]:event.target.value
    })
  }

  const onEditSubmitHandler=(event)=>{
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
      let bookDetails =[...getList];
      let id=String(bookDetails[getIndex].id);
      axios.patch('http://localhost:3000/bookDetails/'+id,{
        bookTitle:getBook.bookTitle,
        bookDesc:getBook.bookDesc,
        author:getBook.author,
        noOfBooks:getBook.noOfBooks
      }).then(()=>{
        setList(bookDetails);
        bookDetails[getIndex].id = getBook.id;
        bookDetails[getIndex].bookTitle=getBook.bookTitle;
        bookDetails[getIndex].bookDesc = getBook.bookDesc;
        bookDetails[getIndex].author = getBook.author;
        bookDetails[getIndex].noOfBooks=getBook.noOfBooks
      }).catch((error)=>{

      });
    //bookDetails[getIndex].id = getBook.id;
    //bookDetails[getIndex].bookTitle=getBook.bookTitle;
    //bookDetails[getIndex].bookDesc = getBook.bookDesc;
    //bookDetails[getIndex].author = getBook.author;
    //bookDetails[getIndex].noOfBooks=getBook.noOfBooks
    //setList(bookDetails);
    //sessionStorage.setItem('bookDetails',JSON.stringify(bookDetails));
    }
  }

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
                        <input type="text" value={getSearch} onChange={onChangeSearchHandler} className="form-control" id="bookTitle"/>
                      </div>
                      
                      <button id="search" onClick={searchFilter} type="submit" className="btn btn-primary">Search</button>
                      <button id="reset" onClick={resetFilter} className="btn btn-primary">Reset</button>

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
                        {getList.map((obj,index)=>{
                           return(<tr key={index}>
                            
                            <td>{obj.id}</td>
                            <td>{obj.bookTitle}</td>
                            <td>{obj.bookDesc}</td>
                            <td>{obj.author}</td>
                            <td>{obj.noOfBooks}</td>
                            <td><i  data-toggle="modal" onClick={()=>onEditHandler(index)} data-target="#edit" className="fa fa-pencil-square-o" aria-hidden="true"></i></td>
                            <td><i className="fa fa-trash" onClick={()=>onDeleteHandler(index)} aria-hidden="true"></i></td>
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
              <input type="text" value={getBook.bookId} onChange={onChangeHandler} className="form-control" id="bookId" name="bookId" placeholder="Book ID"/>
              {getValidation.bookId && <div style={{fontSize:"10px"}} class="alert alert-danger" role="alert">
              {getValidation.bookId}
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
              {getValidation.bookDesc && <div style={{fontSize:"10px"}} className="alert alert-danger" role="alert">
              {getValidation.bookDesc}
              </div>}
            </div>
            <div className="form-group">
              <label name="author">Author Name</label>
              <input type="text" value={getBook.author} onChange={onChangeHandler} className="form-control" id="author" name="author"  placeholder="Author Name"/>
              {getValidation.author && <div style={{fontSize:"10px"}} className="alert alert-danger" role="alert">
              {getValidation.author}
              </div>}
            </div>
            <div className="form-group">
              <label name="noOfBooks">Number of Books Available</label>
              <input type="text" value={getBook.noOfBooks} onChange={onChangeHandler} className="form-control" id="noOfBooks" name="noOfBooks"  placeholder="Number of books available"/>
              {getValidation.noOfBooks && <div style={{fontSize:"10px"}} className="alert alert-danger" role="alert">
              {getValidation.noOfBooks}
              </div>}
            </div>
            </form>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
          <button type="button" data-dismiss="modal" onClick={onEditSubmitHandler} className="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>
  </div>
    </div>);
}

export default SearchBooksAdmin;