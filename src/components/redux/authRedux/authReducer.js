import { REGISTER_FAILURE, REGISTER_REQUEST, REGISTER_SUCCESS } from "./actionType"

const initState = {
    isRegister : false,
    error : false
}
export const authReducer = (state=initState,{type,payload})=>{
    switch(type){
        case REGISTER_REQUEST:
            return{
                ...state
            }
        case REGISTER_SUCCESS:
            return{
                ...state,
                isRegister : true,
                error: false
            }
        case REGISTER_FAILURE:
            return{
                ...state,
                isRegister:false,
                error : true
            }
        default:
            return state
    }
}