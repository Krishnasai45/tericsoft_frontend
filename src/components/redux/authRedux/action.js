import { REGISTER_FAILURE, REGISTER_REQUEST, REGISTER_SUCCESS } from "./actionType"
import axios from "axios"
export const registerRequest = (payload)=>{
    return{
        type:REGISTER_REQUEST,
        payload
    }
}
export const registerSuccess = (payload)=>{
    return{
        type : REGISTER_SUCCESS,
        payload
    }
}
export const registerFailure = (payload)=>{
    return{
        type : REGISTER_FAILURE,
        payload
    }
}

export const registerAdmin = (payload)=>(dispatch)=>{
    dispatch(registerRequest());
  return axios({
    method: "POST",
    url: "http://localhost:5000/account/register",
    data: {
      phone: payload.phone,
      password: payload.password,
    },
  })
    .then((res) => dispatch(registerSuccess(res)))
    .catch((err) => dispatch(registerFailure(err)));

}