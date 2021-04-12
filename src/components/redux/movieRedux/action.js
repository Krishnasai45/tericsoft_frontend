import axios from "axios"
import { ADDMOVIE_FAILURE, ADDMOVIE_REQUEST, ADDMOVIE_SUCCESS, DELETE_FAILURE, DELETE_REQUEST, DELETE_SUCCESS, EDIT_FAILURE, EDIT_REQUEST, EDIT_SUCCESS, MOVIES_FAILURE, MOVIES_REQUEST, MOVIES_SUCCESS } from "./actionType"

export const moviesRequest = (payload)=>{
    return{
        type : MOVIES_REQUEST,
        payload
    }
}
export const moviesSuccess = (payload)=>{
    return{
        type : MOVIES_SUCCESS,
        payload
    }
}

export const moviesFailure = (payload)=>{
    return{
        type : MOVIES_FAILURE,
        payload
    }
}

export const moviesData = (payload)=>(dispatch)=>{
    dispatch(moviesRequest());
    return axios({
      method: "GET",
      url: "http://localhost:5000/movie",
      headers:{
        "Content-Type":"application/json",
        "Authorization":"Bearer "+localStorage.getItem("jwt")
        }
      
    })
      .then((res) => dispatch(moviesSuccess(res.data)))
      .catch((err) => dispatch(moviesFailure(err)));
}

// Delete Actions

export const deleteRequest = (payload)=>{
    return{
        type : DELETE_REQUEST,
        payload
    }
}

export const deleteSuccess=(payload)=>{
    return{
        type:DELETE_SUCCESS,
        payload
    }
}
export const deleteFailure = (payload)=>{
    return{
        type : DELETE_FAILURE,
        payload
    }
}

export const deleteData = (payload)=>(dispatch)=>{
    dispatch(deleteRequest());
    return axios({
      method: "Delete",
      url: "http://localhost:5000/movie/"+payload,
      headers:{
        "Content-Type":"application/json",
        "Authorization":"Bearer "+localStorage.getItem("jwt")
        }
      
    })
      .then((res) => dispatch(deleteSuccess(res.data)))
      .catch((err) => dispatch(deleteFailure(err)));
}


//Add Movies Action

export const addMovieRequest = (payload)=>{
    return{
        type : ADDMOVIE_REQUEST,
        payload
    }
}

export const addMovieSuccess = (payload)=>{
    return{
        type : ADDMOVIE_SUCCESS,
        payload
    }
}

export const addMovieFailure = (payload)=>{
    return{
        type : ADDMOVIE_FAILURE,
        payload
    }
}

export const AddMovieData = (payload)=>(dispatch)=>{
    dispatch(addMovieRequest());
    return axios({
        method: "POST",
        url: "http://localhost:5000/movie",
        headers:{
            "Content-Type":"application/json",
            "Authorization":"Bearer "+localStorage.getItem("jwt")
        },
        data: payload,

    })
    .then((res) => dispatch(addMovieSuccess(res.data)))
    .catch((err) => dispatch(addMovieFailure(err)));
}


// Edit Actions

export const editRequest = (payload)=>{
    return{
        type : EDIT_REQUEST,
        payload
    }
}

export const editSuccess = (payload)=>{
    return{
        type : EDIT_SUCCESS,
        payload
    }
}

export const editFailure = (payload)=>{
    return{
        type : EDIT_FAILURE,
        payload
    }
}

export const editMovie = (payload)=>(dispatch)=>{
    dispatch(editRequest());
    return axios({
        method: "PUT",
        url: "http://localhost:5000/movie/"+payload.id,
        headers:{
            "Content-Type":"application/json",
            "Authorization":"Bearer "+localStorage.getItem("jwt")
        },
        data: payload,

    })
    .then((res) => dispatch(editSuccess(res.data)))
    .catch((err) => dispatch(editFailure(err)));
}