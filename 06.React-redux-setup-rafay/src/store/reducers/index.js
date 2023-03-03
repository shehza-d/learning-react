import { combineReducers } from "redux";
import register from "register";
import user from "user";

const reducers = combineReducers({
 
  register: register,
  user: user,
});

export default reducers;
