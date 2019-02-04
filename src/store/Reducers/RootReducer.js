import { combineReducers } from "redux";
import SignInReducer from "./SignInReducer";
const RootReducer = combineReducers({
    signIn: SignInReducer,
})
export default RootReducer;