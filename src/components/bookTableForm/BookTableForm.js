import React, { useState } from "react";
import {
  Grid,
  TextField,
  makeStyles,
  FormControl,
  InputLabel,
  Select as MuiSelect,
  MenuItem,
  Button,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiFormControl-root": {
      width: "90%",
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
          <Grid item xs={6}>
            <TextField
              variant="outlined"
              name="name"
              label="Name"
              required={true}
            />
            <TextField
              variant="outlined"
              name="width"
              label="Width"
              required={true}
            />
            <TextField
              variant="outlined"
              name="height"
              label="Height"
              required={true}
            />
          </Grid>
          <Grid item xs={6}>
            <FormControl variant="outlined">
              <InputLabel>Category</InputLabel>
              <MuiSelect name="category" label="Category" required={true}>
                <MenuItem value="">None</MenuItem>
              </MuiSelect>
            </FormControl>
            <TextField
              variant="outlined"
              name="chairs"
              label="Chairs"
              required={true}
            />
            <TextField
              id="outlined-textarea"
              label="Description"
              placeholder="Description"
              multiline
              variant="outlined"
              maxRows={10}
              minRows={10}
              name="description"
              required={true}
            />
          
          </Grid>
        </Grid>
      </form>
    </div>
  );
}
