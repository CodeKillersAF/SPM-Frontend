import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Select from "react-select";
import axios from "axios";
import TextField from '@material-ui/core/TextField';
import './orderForm.css';
// import TableCart from "../testCart/TableCart";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '50ch',
    },
  },
}));

export default function OrderForm(props) {
  const { responses, open, onClose, cartItem, itemsPrice } = props;

  console.log('cart item', cartItem);
  console.log('item price', itemsPrice);
  var item_ids = [];
  var qtys =[];
  var item_name = [];

  cartItem.map((a) => {
    console.log('food name : ' , a.foodName);
    item_ids.push(a._id);
    qtys.push(a.qty)
    item_name.push(a.foodName)

  })

  console.log('item ids', item_ids);
  console.log('quantity', qtys)
  console.log('item name', item_name);

  const copy_res = responses;
  
  const classes = useStyles();
  // const [open, setOpen] = React.useState(false);

  // const handleOpen = () => {
  //   setOpen(true);
  // };

  // const handleClose = () => {
  //   setOpen(false);
  // };

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState("");
  const [type, setType] = useState("");
  const [orderId, setorderId] = useState("");
  const [address, setAddress] = useState("");
  const [disableTrigger, setDisableTrigger] = useState(true);

  const options = [
    { value: "delivery", label: "Delivery" },
    { value: "takeaway", label: "Take Away" },
  ];

  const selectType = (e) => {
    setType(e.value);
  };

  const sendOrder = (e) => {
    e.preventDefault();

    copy_res && copy_res.map(res => {
        item_ids.push(res.id)
    })

    // console.log('item_ids',item_ids);
    // console.log('qtys',qtys);

    var order = {
        first_name: firstName,
        last_name: lastName,
        email: email,
        telephone: telephone,
        items: item_ids,
        order_items_names: item_name,
        quantity: qtys,
        address: address,
        total_price: itemsPrice
      };

      console.log('send order' , order);

    if (type === "delivery") {
      axios
        .post("http://localhost:8000/api/online-delivery/create-order", order)
        .then((response) => {
          console.log(response.data.data);
          alert("Delivery order is settled");
          setorderId(response.data.data._id);
          setDisableTrigger(false);
        })
        .catch((error) => {
          console.log(error);
        });
    } else if (type === "takeaway") {
      axios
        .post("http://localhost:8000/api/online-take-away/create-order", order)
        .then((response) => {
          console.log(response.data.data);
          alert("Take away order is settled");
          setorderId(response.data.data._id);
          setDisableTrigger(false);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      alert("invalid type");
    }
  };

  const deleteOrder = (e) => {
    e.preventDefault();
    if (type === "delivery") {
      axios
        .delete(
          `http://localhost:8000/api/online-delivery/delete-order/${orderId}`
        )
        .then((response) => {
          console.log(response.data.data);
          alert("Delivery ordere deleted");
          onClose();
        })
        .catch((error) => {
          console.log(error);
        });
    } else if (type === "takeaway") {
      axios
        .delete(
          `http://localhost:8000/api/online-take-away/delete-order/${orderId}`
        )
        .then((response) => {
          console.log(response.data.data);
          alert("Take away order deleted");
          onClose();
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      alert("Invalid type");
    }
  };

  return (
    <div>
      {/* <button className="orderNow-button" type="button" onClick={handleOpen}>
        Order Now
      </button> */}

      {/* <TableCart open={open} onClose={} />  */}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={onClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            {/* ------------ Rate form starts ------------------- */}
            <div className="orderForm">
              <h2>Order</h2>
            <form className={classes.root} onSubmit={sendOrder}>
                <TextField
                  id="outlined-basic"
                  label="First Name"
                  variant="outlined"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required={true}
                />
                <br />
                {/* <input
                  type="text"
                  className="form__input"
                  placeholder="First Name"
                  
                /> */}

              <TextField
                  id="outlined-basic"
                  label="Last Name"
                  variant="outlined"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required={true}
                />
{/* 
                <input
                  type="text"
                  placeholder="Last Name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                /> */}
                <br />

                <TextField
                  className="textFieldDesign"
                  id="outlined-basic"
                  label="Email"
                  variant="outlined"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required={true}
                />

                {/* <input
                  type="text"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                /> */}
                <br />

                <TextField
                  id="outlined-basic"
                  label="Telephone"
                  variant="outlined"
                  value={telephone}
                  onChange={(e) => setTelephone(e.target.value)}
                  required={true}
                />
                <br />
                
                <TextField
                  id="outlined-basic"
                  label="Address"
                  variant="outlined"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  required={true}
                />

                {/* <input
                  type="text"
                  placeholder="Telephone"
                  value={telephone}
                  onChange={(e) => setTelephone(e.target.value)}
                /> */}
                <br />
                <Select options={options} onChange={selectType} />

          <div className="button-order">
            <button className="order-button">Order</button>
                <button className={disableTrigger?"order-delete disabled":"order-delete"} disabled={disableTrigger} onClick={deleteOrder}>
                  Delete Order
                </button>
          </div>

            </form>

          </div>

            {/* --------------- Rate form ends ---------------- */}
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
