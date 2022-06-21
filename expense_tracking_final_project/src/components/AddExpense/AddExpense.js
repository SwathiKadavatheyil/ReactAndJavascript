import './AddExpense.css';
import {Link,useNavigate} from "react-router-dom";
import {useState} from 'react';
import {numberValidataion,alphanumericFiftyValidation,alphanumericOnefiftyValidation} from '../Validations';
import axios from 'axios';

function AddExpense(){

    const[getExpense,setExpense]=useState({
        expenseTitle:'',
        expenseNotes:'',
        expenseCategory:'',
        expenseAmount:'',
        expensePaidBy:'',
        expenseDate:''
      })
  
      const[getValidation,setValidation]=useState({
        expenseTitle:'',
        expenseNotes:'',
        expenseCategory:'',
        expenseAmount:'',
        expensePaidBy:'',
        expenseDate:''
      });
  
      const navigate=useNavigate();
      const onAddHandler=(event)=>{
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
        axios.post('http://localhost:3000/expense',{
          expenseTitle:getExpense.expenseTitle,
          expenseNotes:getExpense.expenseNotes,
          expenseCategory:getExpense.expenseCategory,
          expenseAmount:getExpense.expenseAmount,
          expensePaidBy:getExpense.expensePaidBy,
          expenseDate:getExpense.expenseDate
        }).then(()=>{
          navigate('/Dashboard');
        }).catch((error)=>{
  
        })
      }
      }
  
      const onChangeHandler=(event)=>{
        setExpense({
          ...getExpense,[event.target.name]:event.target.value
        })
      }

    return(
        <div>
             <div className="container">
        <div className="row">
        {/* <div className="col-4"></div> */}
        <div className="col-12">
            <h2>Add Expense</h2><br/>
        </div>
        {/* <div className="col-4"></div> */}
        </div>
        <div className="row">
        {/* <div className="col-4">

        </div> */}
        <div className="col-12" style={{display:"flex"}}>
        <form id="addExpenseForm"> 
            <div className="form-group">
              <label name="expenseTitle">Expense Title:</label>
              <input type="text" value={getExpense.expenseTitle} onChange={onChangeHandler} className="form-control" id="expenseTitle" name="expenseTitle"/>
              {getValidation.expenseTitle && <div style={{fontSize:"10px"}} className="alert alert-danger" role="alert">
              {getValidation.expenseTitle}
              </div>}
            </div>
            <div className="form-group">
              <label name="expenseNotes">Expense Notes:</label>
              <input type="text" value={getExpense.expenseNotes} onChange={onChangeHandler} className="form-control" id="expenseNotes" name="expenseNotes"/>
              {getValidation.expenseNotes && <div style={{fontSize:"10px"}} className="alert alert-danger" role="alert">
              {getValidation.expenseNotes}
              </div>}
            </div>
            <div className="form-group">
                <label name="expenseCategory">Expense Category:</label>
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
              <label name="expenseAmount">Expense Amount:</label>
              <input type="text" value={getExpense.expenseAmount} onChange={onChangeHandler} className="form-control" id="expenseAmount" name="expenseAmount"/>
              {getValidation.expenseAmount && <div style={{fontSize:"10px"}} class="alert alert-danger" role="alert">
              {getValidation.expenseAmount}
              </div>}
            </div>
           
            <div className="form-group">
                <label name="expensePaidBy">Expense Paid By:</label>
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
                <label name="expenseDate">Expense Date:</label>
                <input type="date" value={getExpense.expenseDate} onChange={onChangeHandler} className="form-control" id="expenseDate" name="expenseDate"/>
                {getValidation.expenseDate && <div style={{fontSize:"10px"}} className="alert alert-danger" role="alert">
                {getValidation.expenseDate}
                </div>}
            </div>
            <div className="form-group">
              <label>  </label>
            <div>
                <button id="addExpense" onClick={onAddHandler} type="submit" className="btn btn-primary">Add Expense</button>
            </div>
            </div>
          </form>
    </div>
    {/* <div className="col-4">
          
    </div> */}
    </div>
    
    </div>
    </div>
    );
}

export default AddExpense;