import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import OrderForm from '../orderForm/OrderForm';
import './tab.css'

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

export default function TableCart(props) {

    const classes = useStyles();

    const [itemsArr, setItemsArr] = useState([]);
    const {cartItem, onAdd, onRemove, cartopen, onClose} = props;
    const itemsPrice = cartItem.reduce((a, c) => a+c.foodPrice * c.qty, 0);

    const printCart = () => {
        console.log(setItemsArr);
    }

    const [orderoOpen, setOrderOpen] = React.useState(false);

    const handleOrderOpen = () => {
        setOrderOpen(true);
    };
  
    const handleOrderClose = () => {
        setOrderOpen(false);
    };

    return (
            <div>

                {/* {console.log(total)} */}
                <Modal
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                    className={classes.modal}
                    open={cartopen}
                    onClose={onClose}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                    timeout: 500,
                    }}
                >
                    <Fade in={cartopen}>
                        <div className={classes.paper}>
                        <div>
                            {cartItem.length === 0 && <div>Cart is empty</div>}
                            {cartItem.map((item) => (
                                <div key={item._id} className="row">
                                    {/* {itemsArr.push(item._id)} */}
                                    <h1>{item.foodName}</h1>
                                        <h2>{item.qty} x {item.foodPrice}</h2>
                                        <div className="addremovebutton">   
                                            <button onClick={() => onAdd(item)} className="add">+</button>
                                            <button onClick={() => onRemove(item)} className="remove">-</button>
                                        </div>
                                    {/* </div> */}
                                </div>
                            ))}
                            {/* <button onClick={printCart}>print</button> */}
                            {cartItem.length !== 0 && (
                                <>
                                    <h1 style={{ marginLeft: '60px', color: '#483290' }}>Total : {itemsPrice}</h1>
                                </>
                            )}
                            <button className="orderNow-button" onClick={handleOrderOpen}>Order</button>
                        </div>
                        </div>
                    </Fade>
                </Modal>
                <OrderForm open={orderoOpen} onClose={handleOrderClose} cartItem={cartItem} itemsPrice={itemsPrice} />
            </div>
    )
}
