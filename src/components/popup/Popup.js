import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";

import Rating from "@material-ui/lab/Rating";
// import Typography from '@material-ui/core/Typography';
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";

import "./popup.css";
import axios from "axios";
import { useHistory } from "react-router-dom";

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
    padding: theme.spacing(2, 2, 2),
  },
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "60ch",
    },
  },
}));

function Popup({ open, onClose, foodname, foodid }) {
  const classes = useStyles();

  const history = useHistory();
  // console.log(foodname, foodid);

  const [customerName, setCustomerName] = useState("");
  const [aboutFood, setaboutFood] = useState("");
  const [value, setValue] = React.useState(0);

  const addRateForFood = (e) => {
    e.preventDefault();

    let ratingData = {
      customerName: customerName,
      aboutFood: aboutFood,
      starRate: value,
    };

    axios
      .post("http://localhost:8000/api/rate/add-rate", ratingData)
      .then((response) => {
        // console.log(response.data.data);

        const RateId = response.data.data._id;

        let rate = {
          rate: [RateId],
        };

        axios
          .put(`http://localhost:8000/api/food/update-rate/${foodid}`, rate)
          .then((response) => {
            // console.log(response.data.data);
            console.log("updated");
            onClose();
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
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
            <h3 className="sub-heading" style={{ marginBottom: "30px" }}>
              {" "}
              Rate For {foodname}
            </h3>

            <form className={classes.root} noValidate autoComplete="off">
              <TextField
                id="outlined-basic"
                label="Your Name"
                variant="outlined"
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
              />
              <br />
              <TextField
                id="filled-multiline-static"
                label="About Food"
                multiline
                rows={4}
                variant="outlined"
                value={aboutFood}
                onChange={(e) => setaboutFood(e.target.value)}
              />
              <br />

              <center>
                <Box component="fieldset" mb={3} borderColor="transparent">
                  {/* <Typography component="legend">Start Rate</Typography> */}
                  <Rating
                    name="size-large"
                    value={value}
                    onChange={(event, newValue) => {
                      setValue(newValue);
                    }}
                    size="large"
                  />
                </Box>
              </center>

              <center>
                <button onClick={addRateForFood} className="rateBtn">
                  Rate
                </button>
              </center>
            </form>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}

export default Popup;
