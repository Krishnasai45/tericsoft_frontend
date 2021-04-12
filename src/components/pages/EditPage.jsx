import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Container, TextField, Typography } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
// import { postUsersData } from "../redux/login/actrionCreator";
import { Redirect, useHistory, useParams } from "react-router-dom";
import { AddMovieData, editMovie, moviesData } from "../redux/movieRedux/action";
import { NavBar } from "./NavBar";
// import { NavBar } from "../parts/NavBar";
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

export function EditMovie() {
  const classes = useStyles();
  const {id} = useParams()
  
  const allData = useSelector((state)=>state.mov.movies)
  const [data,setData] = useState({})
  const [name, setName] = useState("");
  const [year, setYear] = useState("");
  const [genre, setGenre] = useState("");
  const dispatch = useDispatch();
  const edit = useSelector((state) => state.mov.editmovie);
  const history = useHistory()

  console.log(edit);

  const handleItem =(num)=>{
    const items  = allData?.find((item)=>item._id == num)
    setData(items)
    setName(items.name)
    setYear(items.year)
    setGenre(items.genre)
  }

  React.useEffect(()=>{
    dispatch(moviesData())
    handleItem(id)
    
    console.log(id)
  },[data])

  const payload = {
      id:id,
      name:name,
      year:year,
      genre:genre
  }

  const handleEdit = (e) => {
      e.preventDefault()
    dispatch(editMovie(payload))
    
  };
  const handleBack=()=>{
      history.push("/dashboard")
  }

  return (
    <>
    <NavBar/>
    <Typography variant="h1">Edit Movies</Typography>
   
        <Container className={classes.root}>
          <form
            className={classes.middle}
            noValidate
            
            autoComplete="on"
            onSubmit={handleEdit}
          >
            <TextField
              className={classes.gap}
              id="outlined-basic"
              label="Name"
              value = {name}
              variant="outlined"
              onChange={(e) => setName(e.target.value)}
            />
            <TextField
              className={classes.gap}
              id="outlined-basic"
              label="Year"
              value = {year}
              variant="outlined"
              onChange={(e) => setYear(e.target.value)}
            />
            <TextField
              className={classes.gap}
              id="outlined-basic"
              label="Genre"
              variant="outlined"
              value = {genre}
              onChange={(e) => setGenre(e.target.value)}
            />
            <input className={classes.gap} type="submit" value="SUBMIT" />
          </form>
        </Container>
        {
            edit && <Button onClick={handleBack}>Go Back</Button>
        }
    </>
  );
}

