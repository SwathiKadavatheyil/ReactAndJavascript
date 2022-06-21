import './App.css';
import './assets/font-awesome/css/font-awesome.min.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import About from './components/About/About';
import Services from './components/Services/Services';
import Contact from './components/Contact/Contact'
import AddExpense from './components/AddExpense/AddExpense';
import Dashboard from './components/Dashboard/Dashboard';

function App() {

  return (
    <div>
      <BrowserRouter>
      <Header/>
      <Routes>
      <Route path='' element={<Home/>} />  
      <Route path='/register' element={<Register/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/About' element={<About/>} />
      <Route path='/Services' element={<Services/>}/>
      <Route path='/Contact' element={<Contact/>}/>
      <Route path='/AddExpense' element={<AddExpense/>}/>
      <Route path='/Dashboard' element={<Dashboard/>}/>
      </Routes>
      </BrowserRouter> 
    </div>
  );
}

export default App;
