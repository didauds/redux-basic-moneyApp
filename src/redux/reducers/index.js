import { combineReducers} from "redux";
import accountReducer from "./accountReducer";
import usersReducer from "./usersReducer";

// This index.js is to combine all the reducers

const reducers = combineReducers ({
  account: accountReducer,
  users: usersReducer
})

export default reducers;




