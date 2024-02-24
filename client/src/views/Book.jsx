import React from 'react'
import {useState, useEffect} from 'react'
import { useParams, 
          useNavigate } from 'react-router-dom'
import axios from 'axios'

const Book = (props) => {
  const {books, setBooks} = props
  const [book, setBook] = useState([])
  const {id} = useParams()

  const navigate = useNavigate()

  useEffect(() => {
    axios.get(`http://localhost:8000/api/books/${id}`)
        .then((res) => {
            console.log(res.data);
            setBook(res.data);
        })
        .catch((err) => {
            console.log(err);
        });
}, [])

const deleteBook = () => {
  
    axios.delete(`http://localhost:8000/api/books/${id}`)
        .then((res) => {
            console.log(res.data);
            // setBook(res.data);
        })
        .catch((err) => {
            console.log(err);
        });

navigate("/")
}

  return (
    <div>
      <div className="card" style={{ width: "18rem" }}>
        <div className="card-header">
          {book.title}
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">{book.author}</li>
          <li className="list-group-item">{book.pages}</li>
          <li className="list-group-item">{book.isAvailable ? "YES" : "NO"}</li>
          <li className="list-group-item"><button className="Button" onClick={() => deleteBook()}>Borrow</button></li>
        </ul>
      </div>
    </div>
  )
}

export default Book