import React from 'react'
import {useState, useEffect} from 'react'
import axios from 'axios'
import { BrowserRouter, 
    Routes,
    Route,
    Link  } from 'react-router-dom'

const Home = (props) => {

    const {books, setBooks} = props
    useEffect(() => {
        axios.get("http://localhost:8000/api/books")
            .then((res) => {
                console.log(res.data);
                setBooks(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [])

  return (
    <div>
        
        {}
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">Title</th>
                                <th scope="col">Author</th>
                                <th scope="col">Page Count</th>
                                <th scope="col">Available</th>
                                <th scope='col'></th>
                            </tr>
                        </thead>
        {
            books.map((book, index)=> ( 
                        <tbody>
                            <tr>
                           
                                <th scope="row"><Link to={`/${book._id}/book`}>{book.title}</Link></th>
                                <td>{book.author}</td>
                                <td>{book.pages}</td>
                                <td>{book.isAvailable ? "Yes": "No"}</td>
                                <td><Link to={`/${book._id}/update`}>Update</Link></td>
                            </tr>
                        </tbody>
                    
            ))
        }
        </table>
        
        </div>
    )
}

export default Home