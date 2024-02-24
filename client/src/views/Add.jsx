import {React, useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Add = () => {

  const [errors, setErrors] = useState({})

  const [book, setBook] = useState({
    title: "",
    author: "",
    pages: "",
    isAvailable: false
  })

const nav = useNavigate()

  const submitHandler = (e) => {
    e.preventDefault()
    axios.post('http://localhost:8000/api/add', {
        title: book.title,
        author: book.author,
        pages: book.pages,
        isAvailable: book.isAvailable
     })
       .then(res => {
          console.log(res);
          console.log(res.data);
          nav("/");
        })
        .catch(err => {
          console.log(err)
          setErrors(err.response.data.errors)
          console.log(errors)
        })
  }

  const handleChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value })
  }
  return (
    <div>
      <form className="form-inline" onSubmit={submitHandler}>


        <div className="input-group mb-2 mr-sm-2">
          <div className="input-group-prepend">
            <div className="input-group-text">Title</div>
          </div>
          <input type="text" name="title" onChange={handleChange} value={book.title} className="form-control" id="inlineFormInputGroupUsername2" placeholder="Title"></input>
        </div>
        {errors.title && <p>{errors.title.message}</p>}
        <div className="input-group mb-2 mr-sm-2">
          <div className="input-group-prepend">
            <div className="input-group-text">Author</div>
          </div>
          <input type="text" name="author" onChange={handleChange} className="form-control" id="inlineFormInputGroupUsername2" placeholder="Author"></input>
        </div>
        {errors.author && <p>{errors.author.message}</p>}
        <div className="input-group mb-2 mr-sm-2">
          <div className="input-group-prepend">
            <div className="input-group-text">Pages</div>
          </div>
          <input type="number" name="pages" onChange={handleChange} className="form-control" id="inlineFormInputGroupUsername2" placeholder="Pages"></input>
        </div>
        {errors.pages && <p>{errors.pages.message}</p>}
        <div className="form-check mb-2 mr-sm-2">
          <input className="form-check-input" name="isAvailable" onChange={(e) => setBook({ ...book, [e.target.name]: e.target.checked })} type="checkbox" id="inlineFormCheck"></input>
          <label className="form-check-label" htmlFor="inlineFormCheck">
            is Available
          </label>
        </div>

        <button type="submit" className="btn btn-primary mb-2">Submit</button>
      </form>
    </div>
  )
}

export default Add