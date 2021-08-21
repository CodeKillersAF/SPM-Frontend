import React from 'react';
import './foodmenu.css';
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
//import Fade from '@material-ui/core/Fade';

// import Rating from '@material-ui/lab/Rating';
// import Typography from '@material-ui/core/Typography';
// import Box from '@material-ui/core/Box';

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

    return (

    <div>
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
                  onClick={handleOpen}
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

                  {/* <Fade in={open}>
                      <div className={classes.paper}> */}
                        {/* ------------ Rate form starts ------------------- */}
                        {/* <input type="text" placeholder="Enter Your Name" /> */}
                        {/* <Box component="fieldset" mb={3} borderColor="transparent">
                            <Typography component="legend">Rate Here</Typography>
                            <Rating
                            name="simple-controlled"
                            value={value}
                            onChange={(e, newValue) => {
                                setValue(newValue);
                            }}
                        />

                        <h3>{value}</h3>
                        </Box> */}

                        {/* --------------- Rate form ends ---------------- */}

                      {/* </div>
                 </Fade> */}

                  </Modal>
                {/* ------------------- Modal design ends ---------------------- */}
                
            </div>
            <div className="content">

                <h3>{all.foodName}</h3>
                <p>{all.foodDescription}</p>
                <button className="btn">add to cart</button>
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
