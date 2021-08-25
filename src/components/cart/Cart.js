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
    const {responses } = props;

    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
  
    const handleOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
    var qty = 0
    // const [count, setCount] = useState(0)

    const increaseQty = (id) => {

    }

    const decreaseQty = (id) => {

    }

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
                 
                   <div>
                       <p>{res.foodName} - {res.foodPrice}</p>
                       {/* <button onClick={() => increaseQty(res.id)}>+</button>
                       {qty < 0 ? 0 : qty} 
                       <button onClick={}>-</button> */}
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
