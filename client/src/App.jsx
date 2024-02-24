import { useState } from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Home from './views/Home'
import Add from './views/Add'
import Header from './components/Header'
import Book from './views/Book'
import Update from './views/Update'

import './App.css'

function App() {
  const [books, setBooks] = useState([])

 
  return (
    <>
       <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<Home books={books} setBooks={setBooks}/>} />
          <Route path='/:id/book' element={<Book books={books}/>} />
          <Route path='/add' element={<Add />} />
          <Route path='/:id/update' element={<Update />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
