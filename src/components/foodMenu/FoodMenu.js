import React from 'react';
import './foodmenu.css';
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Navbar from '../navbar/Navbar';
// import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
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

    // popup ends here ---------------------------------------------------------
  	
    const [getAllCategories, setGetallcategories] = useState([]);

    //search state
    const [searchTerm, setSearchTerm] = useState('');
    const [displayAllFoods, setDisplayAllFoods] = useState([]);
    const [responses, setResponses] = useState([]);

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
        .catch((error) => {
          console.log(error);
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

    let orderItems = {};
    const getFoodDetails = (id) => {
     
      axios.get(`http://localhost:8000/api/food/get-food/${id}`)
      .then((response) => {
        console.log('backend response', response.data.data);

        orderItems = {
          id: response.data.data._id,
          foodName: response.data.data.foodName,
          foodPrice: response.data.data.foodPrice,
          category: response.data.data.category,
          foodDescription: response.data.data.foodDescription,
          quantity: 1 
        };
        
        let temp = responses;
        let IsAlreadyInCart = false;
        let filteredData;

        filteredData = temp.map(item => {
          if(id === item.id){
            IsAlreadyInCart = true;
            return {id:item.id,foodName:item.foodName,foodPrice:item.foodPrice + response.data.data.foodPrice,category:item.category,foodDescription:item.foodDescription, quantity:item.quantity}
          }
          return item
        });

        console.log('filtered data', filteredData);

        if(!IsAlreadyInCart){
          IsAlreadyInCart = false;
          filteredData.push(orderItems);
          setResponses(filteredData);
        }

      })
      .catch((error) => {
        console.log(error)
      });

    }


    // const testHanldeOpen = () => {
    //   handleOpen()
    // }

    return (
    
    <div>
      <div className="searchFoodItems">
       <input type="text" className="input-search" placeholder="Search Food Name Or Prices" 
        onChange={(e) => {setSearchTerm(e.target.value) }}
            />
          </div>
          <div>
        {console.log('Palleha', responses)}
        <Navbar responses={responses}></Navbar>
      </div>
      

        <div className="foodItemCenter">
          {/* {console.log('all_cat', getAllCategories)}
          {responses.map((res) => (
            <div>
               <p>{res.name}</p>
            </div>
           
          ))} */}
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

      {displayAllFoods.filter( (val) => {
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
                <img src={all.url} alt="dbUrl" width="10px  " />
                <div className="fa fa-star"
                  
                ></div>

                {/* ------------------ Modal design start ---------------------------- */}
                    <Modal
                        aria-labelledby="transition-modal-title"
                        aria-describedby="transition-modal-description"
                        className={classes.modal}
                        open={open}
                        onClose={handleClose}
                        closeAfterTransition
                        BackdropComponent={Backdrop}
                        BackdropProps={{
                          timeout: 500,
                        }}
                      >

                  <Fade in={open}>
                      <div className={classes.paper}>
                        {/* ------------ Rate form starts ------------------- */}
                      </div>
                 </Fade>

                  </Modal>
                {/* ------------------- Modal design ends ---------------------- */}
                
            </div>
            <div className="content">

                <h3>{all.foodName}</h3>
                <p>{all.foodDescription}</p>
                <button className="btn" onClick={() => getFoodDetails(all._id)}>add to cart</button>
                <span className="price">Rs.{all.foodPrice}</span>
            </div>

        </div>
  ))} 
    {/* <button onClick={getOnlyUniqueItems}>only unique</button> */}

    </div>
</section>

</div>
)
}

export default FoodMenu
