import React from 'react';
import '../foodMenu/foodmenu.css';
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import './tab.css';
import TableCart from './TableCart';

// import Popup from '../popup/Popup';

function TestCart() {

    const [getAllCategories, setGetallcategories] = useState([]);


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


    // cart test start
    const [cartItem, setCartItem] = useState([]);

    const onAdd = (food) => {
      const exist = cartItem.find((plus) => ( plus._id === food._id ));

      if(exist){
        setCartItem(cartItem.map((plus) => (
           plus._id === food._id ? {...exist, qty: exist.qty+1 } : plus
        )));
      }
      else{
        setCartItem([...cartItem, {...food, qty: 1}]);
      }
    }

    const onRemove = (food) => {
      const exist = cartItem.find((minus) => ( minus._id === food._id ));
      if(exist.qty === 1){
        setCartItem(cartItem.filter((minus) => minus._id !== food._id));
      }
      else{
        setCartItem(cartItem.map((minus) => (
          minus._id === food._id ? {...exist, qty: exist.qty-1 } : minus
        )));
      }
    }



    return (

    <div>

            <div className="foodItemCenter" style={{marginTop: 50}}>
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

      {displayAllFoods.map((all) => ( 
        <div className="box">
            <div className="image">
                <img src={all.url} alt="dbUrl" />
                <div className="fa fa-star"
                //   onClick={() => getFoodForStar(all._id)}
                ></div>
                
            </div>
            <div className="content">

                <h3>{all.foodName}</h3>
                <p>{all.foodDescription}</p>
                <button className="btn" onClick={() => onAdd(all)} >add to cart</button>
                <span className="price">Rs.{all.foodPrice}</span>
            </div>

            <h1></h1>

        </div>
  ))} 

    </div>

    <TableCart cartItem={cartItem} onAdd={onAdd} onRemove={onRemove} />

</section>
</div>
    )
}

export default TestCart
