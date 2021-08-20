import React from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {

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

             <div className="iconCart">
                <a href="#" class="fas fa-shopping-cart"></a>
            </div>

         </header>



    )
}

export default Navbar
