import React from 'react';
import './foodmenu.css';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
// import Select from 'react-select';

function FoodMenu() {

    
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

    // get to select box
    let allCategoriesArray = [];
    getAllCategories.map((fc, index) => {
      let allCategory = {
        value: fc._id,
        label: fc.categoryName
      }

      allCategoriesArray.push(allCategory);
    })

    const [categoryValue, setCategoryValue] = useState('');

    const selectedCategory = (e) => {
       setCategoryValue(e.value);
    }

    const getFoodsCategoryToSelect = () => {
      axios.get(`http://localhost:8000/api/category/own-category/${categoryValue}`)
        .then((response) => {
          console.log(response.data.foodItems);
        })
    }

    return (

    <div>
       <input type="text" class="input-search" placeholder="Search Username" 
        onChange={(e) => {setSearchTerm(e.target.value) }}
            />
        <br /><br />

                             {/* Category showing */}
                             <ButtonGroup size="large" variant="contained" color="primary" aria-label="contained primary button group">
                 {getAllCategories.map((ac) => (
                     <Button onClick={() => getCategoryFoods(ac._id)}>{ac.categoryName}</Button>
              ))}
                          
             </ButtonGroup>
                    <br /><br />

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
                <a href="#" className="fa fa-star"></a>
                {/* <i class="fa fa-star" aria-hidden="true"></i> */}
            </div>
            <div className="content">

                <h3>{all.foodName}</h3>
                <p>{all.foodDescription}</p>
                <a href="#" className="btn">add to cart</a>
                <span className="price">Rs.{all.foodPrice}</span>
            </div>
        </div>
  ))} 
       

    </div>

</section>
</div>
    )
}

export default FoodMenu
