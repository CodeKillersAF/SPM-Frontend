import React, { useState } from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {

    return (

        <div>
        <header>
            <a href="#" className="logo"><i class="fas fa-utensils"></i>KASUKI</a> 
              <div className="navbar" id="myTopnav">
           
                 <Link to="/">Home</Link>     
                 <Link to="/table">Table</Link>  
                 <Link to="/contact">About</Link>  
                 <Link to="/menu">Menu</Link>  
                 
             </div>

         </header>

</div>
    )
}

export default Navbar
