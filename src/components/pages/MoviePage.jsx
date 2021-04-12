import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Card, CardActions, CardContent, Container, Typography } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import {  useHistory, useParams } from "react-router-dom";
import {  moviesData } from "../redux/movieRedux/action";
import { NavBar } from "./NavBar";
const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      minWidth: 275,
    },
  },
//   root: {
//     minWidth: 275,
//   },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  
}));

export function MoviePage() {
  const classes = useStyles();
  const {id} = useParams()
  
  const allData = useSelector((state)=>state.mov.movies)
  const [data,setData] = useState({})
  const dispatch = useDispatch();
  const history = useHistory()

  console.log(data);

  const handleItem =(num)=>{
    const items  = allData?.find((item)=>item._id == num)
    setData(items)
  }

  React.useEffect(()=>{
    dispatch(moviesData())
    handleItem(id)
    
    console.log(id)
  },[])

  const handleBack=()=>{
      history.push("/dashboard")
  }

  return (
    <>
    <NavBar/>
    <Typography variant="h1">Movie Details</Typography>
   
        <Container className={classes.root}>
        <Card className={classes.root}>
            <CardContent>
                <Typography  variant="h3">
                Movie Name : {data.name}
                </Typography>
                <Typography variant="h4" >
                Year : {data.year}
                </Typography>
                <Typography variant="h4">
                Genre : {data.genre}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" onClick = {handleBack}>Back</Button>
            </CardActions>
    </Card>
        </Container>
    </>
  );
}

