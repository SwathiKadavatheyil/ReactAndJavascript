
import './App.css';
import './assets/font-awesome/css/font-awesome.min.css';
import Header from './components/Header/Header';
import FirstPage from './components/FirstPage/FirstPage';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Rules from './components/Rules/Rules';
import PriceCard from './components/PriceCard/PriceCard';
import Register from './components/Register/Register';
import About from './components/About/About';
import SearchBooks from './components/SearchBooks/SearchBooks';
import SearchBooksAdmin from './components/SearchBooksAdmin/SearchBooksAdmin';
import AddBook from './components/AddBook/AddBook';
import {BrowserRouter,Routes,Route} from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Header/>
      <Routes>
      <Route path='' element={<FirstPage/>}/>
      <Route path='/Home' element={<Home/>} />  
      <Route path='/register' element={<Register/>} />
      <Route path='/rules' element={<Rules/>}/>
      <Route path='/pricecard' element={<PriceCard/>}/>
      <Route path='/login' element={<Login/>} />
      <Route path='/About' element={<About/>} />
      <Route path='/SearchBooks' element={<SearchBooks/>}/>
      <Route path='/SearchBooksAdmin' element={<SearchBooksAdmin/>}/>
      <Route path='/AddBook' element={<AddBook/>}/>
      </Routes>
      </BrowserRouter>   
    </div>
  );
}

export default App;
