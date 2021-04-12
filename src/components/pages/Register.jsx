import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, TextField, Typography } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";
import { registerAdmin } from "../redux/authRedux/action";
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
  err:{
      color : "red"
  },
  click:{
      cursor:"pointer",
      TextDecoder:"none"
  }
}));

export function Register() {
  const classes = useStyles();
  const [phone, setPhone] = useState();
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const isRegister = useSelector((state) => state.auth.isRegister);
  const errors = useSelector((state)=>state.auth.error)
  const history = useHistory()

    //   console.log(isRegister);

  const handleAuth = (e) => {
    e.preventDefault();
    var data = { phone: phone, password: password };
    dispatch(registerAdmin(data));
    
  };
  const handleLogin = ()=>{
    history.push("/login")
  }
    // console.log(errors)
  return (
    <>
    <h2>REGISTER</h2>
      {!isRegister ? (
          <>
        <Container className={classes.root}>
          <form
            className={classes.middle}
            noValidate
            autoComplete="on"
            onSubmit={handleAuth}
          >
            
            <TextField
              className={classes.gap}
              id="outlined-basic"
              label="Phone Number"
              
              variant="outlined"
              onChange={(e) => setPhone(e.target.value)}
            />
            <TextField
              className={classes.gap}
              id="outlined-basic"
              label="Password"
              variant="outlined"
              
              onChange={(e) => setPassword(e.target.value)}
            />
            <input className={classes.gap} type="submit" value="SUBMIT" />
          </form>
        </Container>
        {
          phone == ""||password ==""?(<Typography className={classes.err}>Please fill all the fields</Typography>)  : errors ? (<Typography className={classes.red}>User Already exist</Typography>):null
        }
        </>
      ) : (
        <Redirect to="/login" />
      )}
      <Typography  >Already Registerd:<a href="/login" className={classes.click}>Click to login</a></Typography>
    </>
  );
}

