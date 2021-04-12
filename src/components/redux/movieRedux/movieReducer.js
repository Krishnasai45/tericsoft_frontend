import { ADDMOVIE_FAILURE, ADDMOVIE_REQUEST, ADDMOVIE_SUCCESS, DELETE_FAILURE, DELETE_REQUEST, DELETE_SUCCESS, EDIT_FAILURE, EDIT_REQUEST, EDIT_SUCCESS, MOVIES_FAILURE, MOVIES_REQUEST, MOVIES_SUCCESS } from "./actionType"

const initState = {
    movies :[],
    isloading : false,
    error : false,
    delete : false,
    addmovie : false,
    editmovie:false
}

export const movieReducer = (state=initState,{type,payload})=>{
    switch(type){
        case MOVIES_REQUEST:
            return{
                ...state,
                isloading : true
            }
        case MOVIES_SUCCESS:
            return{
                ...state,
                isloading : false,
                movies : [...payload],
                error : false
            }
        case MOVIES_FAILURE:
            return{
                ...state,
                isloading:false,
                error:true
            }
        case DELETE_REQUEST:
            return{
                ...state,
                delete:false
            }
        case DELETE_SUCCESS:
            return{
                ...state,
                delete:true
            }
        case DELETE_FAILURE:
            return{
                ...state,
                delete:false
            }
        case ADDMOVIE_REQUEST:
            return{
                ...state,
                addmovie:false
            }
        case ADDMOVIE_SUCCESS:
            return{
                ...state,
                addmovie:true
            }
        case ADDMOVIE_FAILURE:
            return{
                ...state,
                addmovie:false
            }
        case EDIT_REQUEST:
            return{
                ...state,
                editmovie:false
            }
        case EDIT_SUCCESS:
            return{
                ...state,
                editmovie:true
            }
        case EDIT_FAILURE:
            return{
                ...state,
                editmovie:false
            }
        default:
            return state
    }
}