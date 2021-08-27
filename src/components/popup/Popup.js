import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';

import './popup.css';

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
    padding: theme.spacing(5, 7, 5),
  },
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '50ch',
    },
  },
}));


function Popup({ open, onClose, rateId }) {

  const classes = useStyles();


  const [value, setValue] = React.useState(0);

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

                      <h3 className="sub-heading" style={{ marginBottom: "30px" }}> Rate Our Food </h3>
                
                      <form className={classes.root} noValidate autoComplete="off">

                            <TextField 
                                id="outlined-basic" 
                                label="Your Name" 
                                variant="outlined" 
                            />
                            <br />
                            <TextField
                              id="filled-multiline-static"
                              label="About Food"
                              multiline
                              rows={4}
                              variant="outlined"
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
                                 <button className="rateBtn">Rate</button>
                          </center>

                      </form>

                      </div>
                 </Fade>

                  </Modal>
    </div>
  )
}

export default Popup
