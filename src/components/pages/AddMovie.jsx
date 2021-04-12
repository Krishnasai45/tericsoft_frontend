import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, TextField, Typography } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import { AddMovieData } from "../redux/movieRedux/action";
import { NavBar } from "./NavBar";
const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
  middle: {
    marginTop: "100px",
    marginRight: "40%",
    marginLeft: "40%",
  },
  gap: {
    padding: "10px",
  },
  
}));

export function AddMovie() {
  const classes = useStyles();
  const [name, setName] = useState("");
  const [year, setYear] = useState("");
  const [genre, setGenre] = useState("");
  const dispatch = useDispatch();
  const add = useSelector((state) => state.mov.addmovie);

  console.log(add);

  const handleAdd = (e) => {
    e.preventDefault();
    var data = { name: name, year: year, genre: genre };
    dispatch(AddMovieData(data));
    
  };

  return (
    <>
    <NavBar/>
    <Typography variant="h1">Add Movies</Typography>
    {
        !add ? 
        (<Container className={classes.root}>
          <form
            className={classes.middle}
            noValidate
            autoComplete="on"
            onSubmit={handleAdd}
          >
            <TextField
              className={classes.gap}
              id="outlined-basic"
              label="Name"
              variant="outlined"
              onChange={(e) => setName(e.target.value)}
            />
            <TextField
              className={classes.gap}
              id="outlined-basic"
              label="Year"
              variant="outlined"
              onChange={(e) => setYear(e.target.value)}
            />
            <TextField
              className={classes.gap}
              id="outlined-basic"
              label="Genre"
              variant="outlined"
              onChange={(e) => setGenre(e.target.value)}
            />
            <input className={classes.gap} type="submit" value="SUBMIT" />
          </form>
        </Container>):
        (<Redirect to="/dashboard" />)
    } 
    </>
  );
}

