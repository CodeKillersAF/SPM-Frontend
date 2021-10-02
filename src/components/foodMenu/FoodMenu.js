import React from 'react';
import './foodmenu.css';
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';

import Popup from '../popup/Popup';
import TableCart from '../testCart/TableCart';
import { makeStyles } from '@material-ui/core/styles';
import AlertCart from '../alertCart/AlertCart';

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      '& > * + *': {
        marginTop: theme.spacing(2),
      },
    },
  }));

function FoodMenu() {

  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [cartopen, setCartOpen] = React.useState(false);

  const handleOpenCart = () => {
    setCartOpen(true);
  };

  const handleCloseCart = () => {
    setCartOpen(false);
  };


  const [alertOpen, setAlertOpen] = React.useState(false);

  const handleOpenCartAdd = () => {
    setAlertOpen(true);
  };

  const handleCloseCartAdd = () => {
    setAlertOpen(false);
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

    const [foodName, setFoodName] = useState('');
    const [foodId, setFoodId] = useState('');

    const getFoodForStar = (id) => {
        axios.get(`http://localhost:8000/api/food/one-food/${id}`)
        .then((response) => {
          console.log(response.data.data);
          setFoodName(response.data.data.foodName);
          setFoodId(response.data.data._id);
          handleOpen();
        })
        .catch((error) => {
          console.log(error);
        })
    }

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
          handleOpenCartAdd();
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
        <Popup open={open} onClose={handleClose} foodname={foodName} foodid={foodId} />

        <TableCart cartopen={cartopen} onClose={handleCloseCart} cartItem={cartItem} onAdd={onAdd} onRemove={onRemove} />

          <div className="SearchIconHeader">
              <div className="searchFoodItems">
                <input type="text" className="input-search" placeholder="Search Food Name Or Prices" 
                  onChange={(e) => {setSearchTerm(e.target.value) }}
                />
              </div>
              <div className="iconCart">
                  <button class="fas fa-shopping-cart" onClick={handleOpenCart} />
                  {/* <h4 style={{display: 'inline-block'}} onClick={handleOpen}>Cart</h4> */}
              </div>
          </div>


            <div className="foodItemCenter">
          {getAllCategories.map((ac) => (
             <div className="foodItemDiv">
                  <button className="foodItemCategory" onClick={() => getCategoryFoods(ac._id)}>
                        <img src={ac.url}
                            width="40px" height="40px"
                        /><br/>
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
                  onClick={() => getFoodForStar(all._id)}
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

    <AlertCart
        open={alertOpen}
        message="Added to cart successfully"
        onClose={handleCloseCartAdd}
      />

</section>
</div>
    )
}

export default FoodMenu