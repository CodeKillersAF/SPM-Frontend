import React from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';
import Cart from '../cart/Cart';
function Navbar(props) {

    const {responses , total} = props

    return (
        <header>
            <a href="#" className="logo"><i class="fas fa-utensils"></i>SPM</a> 
              <div className="navbar" id="myTopnav">
           
                 <Link to="/">Home</Link>     
                 <Link to="/table">Table</Link>  
                 <Link to="/about">About</Link>  
                 <Link to="/menu">Menu</Link>  
                 <Link to="/review">Review</Link>  
                 <Link to="/order">Order</Link>  
                 
             </div>
                <Cart responses = {responses} total = {total} ></Cart>
         </header>
    )
}

export default Navbar
