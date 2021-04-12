import React from "react";

import {  Button } from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { deepOrange, deepPurple, } from "@material-ui/core/colors";
import { useHistory } from "react-router-dom";
import {  makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    width: "100%",
    marginLeft: 0,
  },

  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepOrange[800],
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
  AvatarCenter: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    padding: theme.spacing(5, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
  title: {
    flexGrow: 1,
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
}));

export function NavBar() {
  const classes = useStyles();
  const history = useHistory()
  const handelLogout =()=>{
    localStorage.clear()
    history.push('/login')
    // console.log("logout")
    }
    const handleHome = ()=>{
        history.push("/dashboard")
    }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
        {/* <Button onClick = {handleHome}>Home</Button> */}
          <Typography variant="h6" noWrap className={classes.title}>
          Welcome to movies app
          </Typography>
          <Button onClick = {handelLogout}>Logout</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}