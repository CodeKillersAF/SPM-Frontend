import React , {useState } from 'react';
import './cart.css'
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import OrderForm from '../orderForm/OrderForm';

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


const Cart = (props) =>  {
    var qty = 1;
    const {responses } = props;
    // const [qty, setQty] = useState();
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
  
    const handleOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    // const increaseQty = (id,price) => {
    //   console.log('price',price);
    //   console.log('id',id);
    //   if (id === '61200063f7c4ca2f1c370524'){
    //     price = price * qty;
    //     qty = qty + 1;
    //     console.log(price);
    //   }
    //   else if (id === '6120b62c15290b40c004e296'){
    //     price = price * qty;
    //     qty = qty + 1;
    //     console.log(price);
    //   }
    // }

    // const decreaseQty = (id) => {

    // }
    //console.log( res.foodPrice * (qty = qty + 1 )
    return (
        
        <div>

            <div className="iconCart">
                <a href="#" class="fas fa-shopping-cart" onClick={handleOpen}></a>
            </div>

            {/* {console.log(total)} */}
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
            <div>
                {console.log('response', responses)}
                
                
               {responses && responses.map(res => (
                 
                   <div className="cart-Item">
                       <h1>{res.foodName} </h1> 
                       <h3>Rs.{res.foodPrice}</h3>
                       {/* <button onClick = {() => increaseQty(res.id,res.foodPrice)}>+</button> */}
                   </div>
                  
               ))}
               <OrderForm responses = {responses}></OrderForm>
               {/* <p>{total}</p> */}
            </div>  
            </div>
          </Fade>
        </Modal>
      </div>
        
    );
}

export default Cart;
