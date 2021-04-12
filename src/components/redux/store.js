import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { authReducer } from "./authRedux/authReducer";
import { movieReducer } from "./movieRedux/movieReducer";

const rootReducer = combineReducers({
  auth:authReducer,
  mov: movieReducer
});
export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);