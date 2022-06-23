import './Dashboard.css';
import { useEffect,useState } from 'react';
import {numberValidataion,alphanumericFiftyValidation,alphanumericOnefiftyValidation} from '../Validations';
import axios from 'axios';

function Dashboard(){

  const[getList,setList] =  useState([]);
  const[getIndex,setIndex]=useState(-1);
  const[getSearch,setSearch]=useState('');

  const[getExpense,setExpense]=useState({
        expenseTitle:'',
        expenseNotes:'',
        expenseCategory:'',
        expenseAmount:'',
        expensePaidBy:'',
        expenseDate:''
  });

  const[getValidation,setValidation]=useState({
    expenseTitle:'',
    expenseNotes:'',
    expenseCategory:'',
    expenseAmount:'',
    expensePaidBy:'',
    expenseDate:''
  });

  useEffect(()=>{
    axios.get('http://localhost:3000/expense').then((response)=>{
      console.log(response);
      setList(response.data)
    }).catch((error)=>{
      console.log(error);
    });
  },[])


  const onDeleteHandler=(index)=>{
    setIndex(index);
  }

  const onDeleteSubmitHandler=(event)=>{
    let expenseDetails = [...getList];
    let id=String(expenseDetails[getIndex].id);
    axios.delete('http://localhost:3000/expense/'+id).then(()=>{
      expenseDetails.splice(getIndex,1);
      setList(expenseDetails);
    }).catch(()=>{

    });
  }

  const onChangeSearchHandler=(event)=>{
    setSearch(event.target.value);
    axios.get('http://localhost:3000/expense').then((response)=>{
    console.log(response);
    setList(response.data)
    }).catch((error)=>{
    console.log(error);
    });
  }

  const searchFilter=(event)=>{
    event.preventDefault();
    
    let details = getList.filter((obj)=>{
      return obj.expenseDate === getSearch;
    })
    setList(details);
  }

  const resetFilter=(event)=>{
    event.preventDefault();
    setSearch('');
    axios.get('http://localhost:3000/expense').then((response)=>{
    console.log(response);
    setList(response.data)
    }).catch((error)=>{
    console.log(error);
    });
  }

  const onEditHandler=(index)=>{
    setExpense({
      expenseTitle:getList[index].expenseTitle,
      expenseNotes:getList[index].expenseNotes,
      expenseCategory:getList[index].expenseCategory,
      expenseAmount:getList[index].expenseAmount,
      expensePaidBy:getList[index].expensePaidBy,
      expenseDate:getList[index].expenseDate
    })
    setIndex(index);
   }

   const onChangeHandler=(event)=>{
    setExpense({
      ...getExpense,[event.target.name]:event.target.value
    })
  }

  const onEditSubmitHandler=(event)=>{
    event.preventDefault();
    setValidation({
        ...getValidation,
        expenseTitle:!alphanumericFiftyValidation(getExpense.expenseTitle)?"Required, Only alphabets and numbers allowed":'',
        expenseNotes:((getExpense.expenseNotes)&&!alphanumericOnefiftyValidation(getExpense.expenseNotes))?"Only alphabets and numbers allowed":'',
        expenseCategory:!(getExpense.expenseCategory)?"Required field":'',
        expenseAmount:!numberValidataion(getExpense.expenseAmount)?"Required, Only numbers allowed":'',
        expensePaidBy:!(getExpense.expensePaidBy)?"Required field":'',
        expenseDate:!(getExpense.expenseDate)?"Required field":''
    })
    if(alphanumericFiftyValidation(getExpense.expenseTitle) && (((getExpense.expenseNotes) && alphanumericOnefiftyValidation(getExpense.expenseNotes))||(!(getExpense.expenseNotes)&& !alphanumericOnefiftyValidation(getExpense.expenseNotes))) && (getExpense.expenseCategory) && numberValidataion(getExpense.expenseAmount) && (getExpense.expensePaidBy) && (getExpense.expenseDate)){
      let expenseDetails =[...getList];
      let id=String(expenseDetails[getIndex].id);
      axios.patch('http://localhost:3000/expense/'+id,{
        expenseTitle:getExpense.expenseTitle,
          expenseNotes:getExpense.expenseNotes,
          expenseCategory:getExpense.expenseCategory,
          expenseAmount:getExpense.expenseAmount,
          expensePaidBy:getExpense.expensePaidBy,
          expenseDate:getExpense.expenseDate
      }).then(()=>{
        setList(expenseDetails);
        expenseDetails[getIndex].expenseTitle=getExpense.expenseTitle;
        expenseDetails[getIndex].expenseNotes=getExpense.expenseNotes;
        expenseDetails[getIndex].expenseCategory=getExpense.expenseCategory;
        expenseDetails[getIndex].expenseAmount=getExpense.expenseAmount;
        expenseDetails[getIndex].expensePaidBy=getExpense.expensePaidBy;
        expenseDetails[getIndex].expenseDate=getExpense.expenseDate;
        
      }).catch((error)=>{

      });
    }
  }
    return(
        <div>
            <div className="container-fluid">
              <div className="row">
                  <div className="col-12 heading">
                  Search Expense
                  </div>
              </div>
              <div className="row">
                <div className="col-3">
                  <form id="searchBook"> 
                      <div className="form-group">
                        <label htmlFor="expenseDate">Expense Date</label>
                        <input type="date" value={getSearch} onChange={onChangeSearchHandler} className="form-control" id="expenseDate"/>
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
                            <th scope="col">Expense Name</th>
                            <th scope="col">Notes</th>
                            <th scope="col">Expense Category</th>
                            <th scope="col">Expense Amount</th>
                            <th scope="col">Paid By</th>
                            <th scope="col">Expense Date</th>
                            <th scope="col">Edit</th>
                            <th scope="col">Delete</th>
                          </tr>
                        </thead>
                        <tbody>
                        {getList.map((obj,index)=>{
                           return(<tr key={index}>
                            
                            <td>{obj.expenseTitle}</td>
                            <td>{obj.expenseNotes}</td>
                            <td>{obj.expenseCategory}</td>
                            <td>{obj.expenseAmount}</td>
                            <td>{obj.expensePaidBy}</td>
                            <td>{obj.expenseDate}</td>
                            <td><i  data-toggle="modal" onClick={()=>onEditHandler(index)} data-target="#edit" className="fa fa-pencil-square-o" aria-hidden="true"></i></td>
                            <td><i className="fa fa-trash" data-toggle="modal" data-target="#deleteModal" onClick={()=>onDeleteHandler(index)} aria-hidden="true"></i></td>
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
          <h5 className="modal-title" id="exampleModalLabel">Edit Expense</h5>
          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="modal-body">
        <form id="addBook"> 
            <div className="form-group">
              <label name="expenseTitle">Expense Title</label>
              <input type="text" value={getExpense.expenseTitle} onChange={onChangeHandler} className="form-control" id="expenseTitle" name="expenseTitle"/>
              {getValidation.expenseTitle && <div style={{fontSize:"10px"}} className="alert alert-danger" role="alert">
              {getValidation.expenseTitle}
              </div>}
            </div>
            <div className="form-group">
              <label name="expenseNotes">Expense Notes</label>
              <input type="text" value={getExpense.expenseNotes} onChange={onChangeHandler} className="form-control" id="expenseNotes" name="expenseNotes"/>
              {getValidation.expenseNotes && <div style={{fontSize:"10px"}} className="alert alert-danger" role="alert">
              {getValidation.expenseNotes}
              </div>}
            </div>
            <div className="form-group">
                <label name="expenseCategory">Expense Category</label>
                <select name="expenseCategory" id="expenseCategory" value={getExpense.expenseCategory} onChange={onChangeHandler}>
                    <option value="">Select</option>
                    <option value="Groceries">Groceries</option>
                    <option value="Snacks">Snacks</option>
                    <option value="Restaurant">Restaurant</option>
                    <option value="Outing">Outing</option>
                    <option value="Movie">Movie</option>
                    <option value="Others">Others</option>
                </select>
                {getValidation.expenseCategory && <div style={{fontSize:"10px"}} className="alert alert-danger" role="alert">
                {getValidation.expenseCategory}
                </div>}
            </div>
            <div className="form-group">
              <label name="expenseAmount">Expense Amount</label>
              <input type="text" value={getExpense.expenseAmount} onChange={onChangeHandler} className="form-control" id="expenseAmount" name="expenseAmount"/>
              {getValidation.expenseAmount && <div style={{fontSize:"10px"}} class="alert alert-danger" role="alert">
              {getValidation.expenseAmount}
              </div>}
            </div>
           
            <div className="form-group">
                <label name="expensePaidBy">Expense Paid By</label>
                <select name="expensePaidBy" id="expensePaidBy"onChange={onChangeHandler}>
                    <option value="">Select</option>
                    <option value="Cash">Cash</option>
                    <option value="Card">Card</option>
                    <option value="UPI">UPI</option>
                    <option value="AccountTransfer">AccountTransfer</option>
                </select>
                {getValidation.expensePaidBy && <div style={{fontSize:"10px"}} className="alert alert-danger" role="alert">
                {getValidation.expensePaidBy}
                </div>}
            </div>

            <div className="form-group">
                <label name="expenseDate">Expense Date</label>
                <input type="date" value={getExpense.expenseDate} onChange={onChangeHandler} className="form-control" id="expenseDate" name="expenseDate"/>
                {getValidation.expenseDate && <div style={{fontSize:"10px"}} className="alert alert-danger" role="alert">
                {getValidation.expenseDate}
                </div>}
            </div>
           
            <div align="center">
                <button id="addExpense" data-dismiss="modal" onClick={onEditSubmitHandler} type="submit" className="btn btn-primary">Update Expense</button>
            </div>
            
          </form>
    </div>
    <div className="col-4">
          
    </div>
      </div>
    </div>
  </div> 


  <div className="modal fade" id="deleteModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">Delete</h5>
          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="modal-body">
          Are you sure you want to delete?
        </div>
           
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" data-dismiss="modal">No</button>
          <button type="button" data-dismiss="modal" onClick={onDeleteSubmitHandler} className="btn btn-primary">Yes</button>
        </div>
      </div>
    </div>
  </div>
  </div>
    );
}

export default Dashboard;