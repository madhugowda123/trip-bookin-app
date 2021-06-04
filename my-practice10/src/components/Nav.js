import React from 'react';
import { Link } from 'react-router-dom';

export const Nav = () => (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
         <h1 style={{color:"wheat"}}>Trips </h1>  
        <li class="nav-item " style={{marginLeft:900}}>
        <Link to="/">
            Home
        </Link>
        </li>
        <li class="nav-item " style={{marginLeft:50}}>

        <Link to="/add">
            Add
        </Link>
        </li>

        <li class="nav-item " style={{marginLeft:50}}>

        <Link to="/list">
            List
        </Link>
        </li>

    </nav>
)