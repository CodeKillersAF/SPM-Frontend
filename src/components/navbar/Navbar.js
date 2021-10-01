import React, { useState } from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {

    return (

        <div>
        <header>
            <a href="#" className="logo"><i class="fas fa-utensils"></i>SPM</a> 
              <div className="navbar" id="myTopnav">
           
                 <Link to="/">Home</Link>     
                 <Link to="/table">Table</Link>  
                 <Link to="/contact">About</Link>  
                 <Link to="/menu">Menu</Link>  
                 <Link to="/offer">Review</Link>  
                 <Link to="/order">Order</Link>  
                 
             </div>

         </header>

</div>
    )
}

export default Navbar
