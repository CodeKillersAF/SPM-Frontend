import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

import Rating from '@material-ui/lab/Rating';
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


function Popup({ open, onClose }) {

  const classes = useStyles();

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
    
                        <input type="text" placeholder="Enter Your Name" />
                        <Box component="fieldset" mb={3} borderColor="transparent">
                            <Typography component="legend">Rate Here</Typography>
                            <Rating
                            name="simple-controlled"
                            // value={value}
                            // onChange={(e, newValue) => {
                            //     setValue(newValue);
                            // }}
                        />

                        {/* <h3>{value}</h3> */}
                        </Box>


                      </div>
                 </Fade>

                  </Modal>
    </div>
  )
}

export default Popup
