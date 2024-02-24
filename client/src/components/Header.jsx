import React from 'react'
import {
    BrowserRouter,
    Link,
    useNavigate
  } from "react-router-dom";
  import Home from '../views/Home.jsx'

const Header = () => {
    const navigate = useNavigate()
  return (
        <div>
            
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#" onClick={() => navigate("/")}>Books</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
           
                            <Link to={"/"} className="nav-link" onClick={() => navigate("/")}>Home <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            
                            <Link to={"/add"} className="nav-link" >Add a book</Link>
                            
                        </li>
                    </ul>
                </div>
            </nav>
            
        </div>
    )
}

export default Header