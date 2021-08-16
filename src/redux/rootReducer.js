import { combineReducers } from "redux";
import authReducer from "./auth/autReducer";
import contactsReducer from "./contacts/contactsReducer";
import userReducer from "./user/userReducer";

const rootReducer = combineReducers({
  contacts: contactsReducer,
  auth: authReducer,
  user: userReducer,
});

export default rootReducer;
