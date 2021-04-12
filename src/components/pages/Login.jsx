import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, TextField, Typography } from "@material-ui/core";
import { Redirect, useHistory } from "react-router-dom";
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
  click:{
      cursor:"pointer"
  }
}));

export function Login() {
  const classes = useStyles();

  const [phone, setphone] = useState();
  const [password, setPassword] = useState("");
  const [isLogin,setIsLogin] = useState(false)
  const history = useHistory()
  const handleLogin = (e) => {
    e.preventDefault();
    fetch("http://localhost:5000/account/login",{
            method:"post",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                password,
                phone
            })
        }).then(res=>res.json())
        .then(data=>{
            // console.log(data)
               localStorage.setItem("jwt",data.token)
               localStorage.setItem("user",JSON.stringify(data.admin))

            setIsLogin(true)
          
        })
        .catch(err=>{
            console.log(err)
        })
  };
  const handleRegister = ()=>{
      history.push("/")
  }

  return (
    <>
    <h2>LOGIN</h2>
      {!isLogin ? (
        <Container className={classes.root}>
          <form
            className={classes.middle}
            noValidate
            autoComplete="on"
            onSubmit={handleLogin}
          >
            <TextField
              className={classes.gap}
              id="outlined-basic"
              label="phone"
              variant="outlined"
              onChange={(e) => setphone(e.target.value)}
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
      ) : (
        <Redirect to="/dashboard" />
      )}
      <Typography  >To Registerd:<a href="/" className={classes.click}>Click to Register</a></Typography>
    </>
  );
}


