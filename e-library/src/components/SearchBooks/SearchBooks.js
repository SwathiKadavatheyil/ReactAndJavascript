import './SearchBooks.css';
import {Link} from 'react-router-dom';
import { useEffect,useState } from 'react';
import {numberValidataion,alphanumericFiftyValidation,alphanumericOnefiftyValidation} from '../Validations';
import axios from 'axios';

function SearchBooks(){

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

  const onChangeSearchHandler=(event)=>{
    setSearch(event.target.value);
  }

  const searchFilter=(event)=>{
    event.preventDefault();
    let details = getList.filter((obj)=>{
      return obj.bookTitle.toUpperCase() === getSearch.toUpperCase() ; 
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

  const onPurchaseHandler=(index)=>{
    let bookDetails =[...getList];
      let id=String(bookDetails[index].id);
      axios.patch('http://localhost:3000/bookDetails/'+id,{
        bookTitle:bookDetails[index].bookTitle,
        bookDesc:bookDetails[index].bookDesc,
        author:bookDetails[index].author,
        noOfBooks:Number(bookDetails[index].noOfBooks)-1
      }).then(()=>{
        axios.get('http://localhost:3000/bookDetails').then((response)=>{
        console.log(response);
         setList(response.data)
        }).catch((error)=>{
        console.log(error);
        });
        }).catch((error)=>{

      });
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
                            <th scope="col">Purchase</th>
                            {/* <th scope="col">Edit</th>
                            <th scope="col">Delete</th> */}
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
                            <td><a className="search_a" href="#" onClick={()=>onPurchaseHandler(index)}>Purchase</a></td>
                            </tr>

                           )
                        })

                        }
                        </tbody>
                      </table>
                  </div>
              </div>
              
          </div>
    </div>);
}

export default SearchBooks;