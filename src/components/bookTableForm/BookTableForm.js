import React, { useState } from "react";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import { Grid, TextField, makeStyles } from "@material-ui/core";

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

export default function BookTableForm() {
  const classes = useStyles();
  return (
    <div>
      <form className={classes.root}>
        <Grid container>
          <Grid item xs={12}>
            <TextField variant="outlined" name="name" label="Name" />
            <TextField variant="outlined" name="email" label="Email" />
            <TextField
              variant="outlined"
              name="phoneNumber"
              label="Phone number"
            />
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <KeyboardDatePicker
                id="time-picker"
                label="Date"
                KeyboardButtonProps={{
                  "aria-label": "change time",
                }}
                inputVariant="outlined"
              />
              <KeyboardTimePicker
                id="time-picker"
                label="Time"
                KeyboardButtonProps={{
                  "aria-label": "change time",
                }}
                inputVariant="outlined"
              />
            </MuiPickersUtilsProvider>
          </Grid>
        </Grid>
      </form>
    </div>
  );
}
