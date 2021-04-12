import React, { useState } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Avatar, Backdrop, Button, Container, Fade, Modal, TextField, Typography } from "@material-ui/core";
import { useHistory, useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
// import { getdata } from "../redux/data/actionCreator";
import { deleteData, editMovie, moviesData } from "../redux/movieRedux/action";
import { NavBar } from "./NavBar";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.blue,
    color: theme.palette.common.black,
    fontSize: 20,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);
const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 700,
  },
  profile_avatar_container:{
    width: 291,
    margin:"30px",
    display: "flex",
    justifyContent: "center",
    
},
profile_image:{
  height: 150,
  width: 150,
  
},
click:{
    cursor:"pointer"
},

}))
;
export function Home() {
  const classes = useStyles();
  const dispatch = useDispatch()
  const allData = useSelector((state)=>state.mov.movies)
  const history = useHistory()

//   const handleItem =()=>{
//     dispatch(moviesData())
//   }
   

  React.useEffect(()=>{
    dispatch(moviesData())
    
  },[])
  console.log(allData)



  const handleDelete = (id)=>{
    dispatch(deleteData(id))
  }
  const handleClick = ()=>{
    history.push("/addMovie")
  }
  const handleEditClick = (id)=>{
    history.push(`/editMovie/${id}`)
  }
  const handleMovie = (id)=>{
      history.push(`/movie/${id}`)
  }

  return (
    <>
    <NavBar/>
    <Typography variant="h3">To Add Movies <Typography className={classes.click} onClick = {handleClick}>Click Hear</Typography></Typography>
    <div style = {{display:"flex",justifyContent:"center"}}>
        {/* <div className={classes.profile_avatar_container}>
            <Avatar
              className={classes.profile_image} 
              href={`${data.name}`}
              src="" 
              alt = {data.name}
            />
        </div> */}
        {/* <div>
            <h1>Student Name : {data.name}</h1>
            <h3>Gender : {data.gender}</h3>
            <h3>Grade : {data.grade}</h3>
        </div> */}
      </div> 
      {/* <Button onClick = {handleClick}>Go Back</Button> */}
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="center">Sl.No</StyledTableCell>
              <StyledTableCell align="center">Movie Name</StyledTableCell>
              <StyledTableCell align="center">Edit</StyledTableCell>
              <StyledTableCell align="center">Delete</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {allData?.reverse().map((item,index) =>
              (
                <StyledTableRow key={item._id}>
                  <StyledTableCell align="center">{index+1}</StyledTableCell>
                  <StyledTableCell align="center" onClick = {()=>handleMovie(item._id)}>{item.name}</StyledTableCell>
                  <StyledTableCell align="center"><button onClick={()=>handleEditClick(item._id)} >Edit</button></StyledTableCell>
                  <StyledTableCell align="center"><button onClick = {()=>handleDelete(item._id)}>Delete</button></StyledTableCell>
                </StyledTableRow>
              )
            )}
          </TableBody>
        </Table>
      </TableContainer>
        
    </>
  );
}

