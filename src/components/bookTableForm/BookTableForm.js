import React, { useState } from "react";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import { Grid, TextField, makeStyles ,Button} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiFormControl-root": {
      width: "95%",
      margin: theme.spacing(2),
    },
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: "#fff",
    },
  },
}));

export default function BookTableForm({onClickCloseBookForm, booking,onBookingChange,submitTableBooking}) {
  console.log(booking);
  const classes = useStyles();
  return (
    <div>
      <form className={classes.root} onSubmit={submitTableBooking}>
        <Grid container>
          <Grid item xs={6}>
          <TextField  required={true} variant="outlined" name="tableName" label="table" value={booking.tableName} onChange={onBookingChange} />
            <TextField  autoFocus variant="outlined" required={true}  label="Name" value={booking.customerName} name="customerName" onChange={onBookingChange}/>
            <TextField variant="outlined" required={true}  label="Email" value={booking.email} name="email" onChange={onBookingChange}/>
            </Grid>
            <Grid item xs={6}>
            <TextField
              variant="outlined"
              label="Phone number"
              name="phone"
              value={booking.phone}
              onChange={onBookingChange}
              type="number"
              required={true}
            />
            
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <KeyboardDatePicker
                id="time-picker"
                label="Date"
                KeyboardButtonProps={{
                  "aria-label": "change time",
                }}
                inputVariant="outlined"
                value={booking.date}
                onChange={date => onBookingChange({ target: { name: "date", value: date } })}
                name="date"
                required={true}
              />
              <KeyboardTimePicker
                id="time-picker"
                label="Time"
                format="h:mm a"
                KeyboardButtonProps={{
                  "aria-label": "change time",
                }}
                inputVariant="outlined"
                value={booking.time}
                onChange={time => onBookingChange({ target: { name: "time", value: time } })}
                name="time"
                required={true}
              />
            </MuiPickersUtilsProvider>
            <div
            style={{ display: "flex", alignItems: "center", marginTop: "10px" }}
          >
            <Button
              variant="contained"
              color="primary"
              style={{ marginRight: "20px", marginLeft: "300px" }}
              type="submit"
            >
              Book
            </Button>
            <Button variant="contained" color="secondary" onClick={onClickCloseBookForm}>
              Cancel
            </Button>
          </div>
          </Grid>
         
        </Grid>
      </form>
    </div>
  );
}
