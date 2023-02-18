// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/home'
import ErrorPage from './Pages/errorPage'
import SignUp from './Pages/signup';
import Login from './Pages/login';
import Book from './Pages/bookPage'
import AddBook from './Pages/addBook';
import UpdateBook from './Pages/updateBook';


function App() {
  return (

    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

      <BrowserRouter>
        <div className='logo'><h2>Book Management</h2></div>
        <div className='route'>
          <Routes>
            <Route path='/' element={<Home />} />

            <Route path='signup' element={<SignUp />} />

            <Route path='login' element={<Login />} />

            <Route path='getBook' element={<Book />} />
            
            <Route path='addBook' element={<AddBook />} />
            
            <Route path='updateBook/:id' element={<UpdateBook />} />

            <Route path='*' element={<ErrorPage />} />
          </Routes>
        </div>
      </BrowserRouter>

    </div>
  );
}

export default App;
