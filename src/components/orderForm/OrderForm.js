import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Select from "react-select";
import axios from "axios";

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
}));

export default function OrderForm(props) {
  const { responses } = props;

  const copy_res = responses;
  var item_ids = [];
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState("");
  const [type, setType] = useState("");
  const [orderId, setorderId] = useState("");
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

    console.log('item_ids',item_ids)

    var order = {
        first_name: firstName,
        last_name: lastName,
        email: email,
        telephone: telephone,
        items: item_ids,
      };

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
          handleClose();
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
          handleClose();
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
      <button type="button" onClick={handleOpen}>
        react-transition-group
      </button>

      
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
            <center>
              <h2>Order</h2>
            </center>
            <form onSubmit={sendOrder}>
              <div>
                <input
                  type="text"
                  placeholder="First Name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
                <br />
                <input
                  type="text"
                  placeholder="Last Name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
                <br />
                <input
                  type="text"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <br />
                <input
                  type="text"
                  placeholder="Telephone"
                  value={telephone}
                  onChange={(e) => setTelephone(e.target.value)}
                />
                <br />
                <Select options={options} onChange={selectType} />

                <button>Order</button>
                <button disabled={disableTrigger} onClick={deleteOrder}>
                  Delete Order
                </button>
              </div>
            </form>

            {/* --------------- Rate form ends ---------------- */}
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
