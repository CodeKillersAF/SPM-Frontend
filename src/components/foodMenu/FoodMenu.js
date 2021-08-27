import React from 'react';
import './foodmenu.css';
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';

import Popup from '../popup/Popup';

function FoodMenu() {

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

    // popup ends here ---------------------------------------------------------
    
    const [getAllCategories, setGetallcategories] = useState([]);

    //search state
    const [searchTerm, setSearchTerm] = useState('');

    const [displayAllFoods, setDisplayAllFoods] = useState([]);

    const getCategoryList = () => {
      axios.get("http://localhost:8000/api/category/all-category")
        .then((response) => {
          console.log(response.data.data);
          setGetallcategories(response.data.data);
        })
        .catch((error) => {
          console.log(error);
        })
    }

    const getAllFoods = () => {
      axios.get("http://localhost:8000/api/food/all-food")
        .then((response) => {
          console.log(response.data.data);
          setDisplayAllFoods(response.data.data);
        })
    }

    const getCategoryFoods = (id) => {
      axios.get(`http://localhost:8000/api/category/own-category/${id}`)
        .then((response) => {
            console.log(response.data.foodItems);
            setDisplayAllFoods(response.data.foodItems);
        })
        .catch((error) => {
          console.log(error);
        })
    }

    useEffect(() => {
      getCategoryList();
      getAllFoods();
    }, []);

    const [cart, setCart] = useState([]);

    const setIds = (id, name) => {
      cart[0] = id;
      setCart([id, name, ...cart]);
      console.log(cart);
      console.log(name);
    }

    return (

    <div>

        <Popup open={handleOpen} onClose={handleClose} />

      <div className="searchFoodItems">
       <input type="text" className="input-search" placeholder="Search Food Name Or Prices" 
        onChange={(e) => {setSearchTerm(e.target.value) }}
            />
          </div>


            <div className="foodItemCenter">
          {getAllCategories.map((ac) => (
             <div className="foodItemDiv">
                  <button className="foodItemCategory" onClick={() => getCategoryFoods(ac._id)}>
                        {ac.categoryName}
                  </button>
             </div>
          ))}
          </div>

        <section className="menu" id="menu">

    <h3 className="sub-heading"> our menu </h3>
    <h1 className="heading"> today's speciality </h1>

    <div className="box-container">

      {displayAllFoods.filter( val => {
        if(searchTerm === '') {
          return val;
        }
        else if(
          val.foodName.toLowerCase().includes(searchTerm.toLowerCase())
        ){
          return val;
        }
        else{
          console.log('Not Found any value');
        }
      }).map((all) => ( 
        <div className="box">
            <div className="image">
                <img src={all.url} alt="dbUrl" />
                <div className="fa fa-star"
                  onClick={open}
                ></div>
                
            </div>
            <div className="content">

                <h3>{all.foodName}</h3>
                <p>{all.foodDescription}</p>
                <button className="btn" onClick={() => setIds(all._id, all.foodName)} >add to cart</button>
                <span className="price">Rs.{all.foodPrice}</span>
            </div>

            <h1></h1>

        </div>
  ))} 

    </div>

</section>
</div>
    )
}

export default FoodMenu
